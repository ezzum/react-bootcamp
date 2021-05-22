import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { IState, IItem } from './intefaces'
import {
  RightClick,
  LeftClick,
  EndSlide,
  GetForecast7Days
} from '../../../../redux/actions'
import {
  Wrapper,
  Card,
  Temp,
  WeatherIcon,
  Date,
  ArrowLeft,
  ArrowRight
} from './slider-styled'

const Slider: React.FC = () => {
  const dispatch = useDispatch()

  const city = useSelector(
    (state: IState) => state.Forecast7DaysSelect.selectedCity
  )
  const arrow = useSelector((state: IState) => state.arrow)
  const forecast = useSelector((state: IState) => state.daysForecast)

  useEffect(() => {
    dispatch(GetForecast7Days(city))
  }, [city])
  useEffect(() => {
    dispatch(EndSlide(forecast))
  }, [forecast])

  const forecastFiltered = forecast
    .filter((item: IItem) => item.visible)
    .map((item: IItem, index) => {
      const date = new window.Date(item.dt * 1000)

      const renderDate = `${date.getDate()} ${date
        .toLocaleString('en', {
          month: 'short'
        })
        .toLowerCase()} ${date.getFullYear()}`

      const temp = Math.round(item.temp.day)
      const renderTemp = temp > 0 ? `+${temp}` : temp

      return (
        <Card key={index}>
          <Date>{renderDate}</Date>
          <WeatherIcon icon={item.weather[0].icon} />
          <Temp>{renderTemp}&deg;</Temp>
        </Card>
      )
    })
  return (
    <Wrapper className="slider">
      <ArrowLeft
        left={arrow.left}
        onClick={() => dispatch(LeftClick(forecast))}
      />
      {forecastFiltered}
      <ArrowRight
        right={arrow.right}
        onClick={() => dispatch(RightClick(forecast))}
      />
    </Wrapper>
  )
}

export default Slider
