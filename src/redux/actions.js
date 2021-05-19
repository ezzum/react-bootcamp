import { CITY_CLICK, SELECT_CITY_CLICK } from './types'

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
