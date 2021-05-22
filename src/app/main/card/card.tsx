import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { Wrapper, Temp, WeatherIcon, Date } from './card-styled'
import { GetForecastHistory } from '../../../redux/actions'
import { IState } from './interfaces'

const Card: React.FC = () => {
  const style = {
    width: '544px',
    left: '50%',
    top: '216px',
    transform: 'translate(-50%, 0)'
  }

  const dispatch = useDispatch()
  const city = useSelector(
    (state: IState) => state.ForecastHistorySelect.selectedCity
  )
  const date = useSelector((state: IState) => state.datePicker)
  const forecast = useSelector((state: IState) => state.historyForecast)
  const dt = new window.Date(forecast.dt * 1000)
  const renderDate = `${dt.getDate()} ${dt
    .toLocaleString('en', {
      month: 'short'
    })
    .toLowerCase()} ${dt.getFullYear()}`
  const renderTemp = forecast.temp > 0 ? `+${forecast.temp}` : forecast.temp

  useEffect(() => {
    dispatch(GetForecastHistory(city, date))
  }, [city])

  return (
    <Wrapper {...style}>
      <Date>{renderDate}</Date>
      <WeatherIcon icon={forecast.weather[0].icon} />
      <Temp>{renderTemp}&deg;</Temp>
    </Wrapper>
  )
}
export default Card
