import axios from 'axios'

import {
  CITY_CLICK,
  SELECT_CITY_CLICK,
  GET_FORECAST_7_DAYS,
  RIGHT_CLICK,
  LEFT_CLICK,
  END_SLIDE
} from './types'

export const SelectCityClick = () => {
  return {
    type: SELECT_CITY_CLICK
  }
}

export const CityClick = (city, cityItems) => {
  const selectedCity = cityItems.find((item) => item.city === city)

  return {
    type: CITY_CLICK,
    value: selectedCity
  }
}

export const GetForecast7Days = (city) => {
  return async (dispatch) => {
    try {
      const { latitude, longitude } = city
      const key = '0f7785fa0fced40690f4f2e5407fdc04'
      const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=current,minutely,hourly,alerts&units=metric&appid=${key}`
      const response = await axios.get(url)

      const data = response.data.daily.map((item, index) => {
        return {
          ...item,
          visible: index < 3
        }
      })

      dispatch({ type: GET_FORECAST_7_DAYS, value: data })
    } catch (error) {
      return null
    }
  }
}

export const RightClick = (days) => {
  const indexVisible = days
    .map((item, index) => {
      if (item.visible) return index
      return false
    })
    .filter((item) => item !== false)

  const newDays = days.map((item, index) => {
    let visible = item.visible
    if (index === indexVisible[0]) visible = !item.visible
    if (index === indexVisible[2] + 1) visible = !item.visible
    return {
      ...item,
      visible
    }
  })
  return {
    type: RIGHT_CLICK,
    value: newDays
  }
}

export const LeftClick = (days) => {
  const indexVisible = days
    .map((item, index) => {
      if (item.visible) return index
      return false
    })
    .filter((item) => item !== false)

  const newDays = days.map((item, index) => {
    let visible = item.visible
    if (index === indexVisible[0] - 1) visible = !item.visible
    if (index === indexVisible[2]) visible = !item.visible
    return {
      ...item,
      visible
    }
  })
  return {
    type: LEFT_CLICK,
    value: newDays
  }
}

export const EndSlide = (days) => {
  if (days[0].visible) {
    return {
      type: END_SLIDE,
      value: {
        left: false,
        right: true
      }
    }
  }

  if (days[days.length - 1].visible) {
    return {
      type: END_SLIDE,
      value: {
        left: true,
        right: false
      }
    }
  }

  return {
    type: END_SLIDE,
    value: {
      left: true,
      right: true
    }
  }
}
