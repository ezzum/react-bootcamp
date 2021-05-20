import React from 'react'
import { useSelector } from 'react-redux'
import { Wrapper, Card, Temp, WeatherIcon, Date } from './sliderStyled'

const Slider: React.FC = () => {
  const forecast = useSelector((state: IState) => state.daysForecast).map(
    (item: IItem, index) => {
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
    }
  )
  return <Wrapper className="slider">{forecast}</Wrapper>
}

export default Slider

interface IState {
  daysForecast: []
}

interface IItem {
  dt: number
  temp: {
    day: number
  }
  weather: [
    {
      icon: string
    }
  ]
}
