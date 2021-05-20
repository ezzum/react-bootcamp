import React from 'react'
import { useSelector } from 'react-redux'
import { Wrapper, Card } from './sliderStyled'

const Slider: React.FC = () => {
  const forecast = useSelector((state: IState) => state.daysForecast).map(
    (item, index) => <Card key={index}></Card>
  )
  return <Wrapper className="slider">{forecast}</Wrapper>
}

export default Slider

interface IState {
  daysForecast: []
}
