import React from 'react'
import { useSelector } from 'react-redux'

import Placeholder from '../placeholder/placeholder'
import SelectCity from '../selectCity/select-city'
import { Wrapper, Title } from './forecast-7-days-styled'
import Slider from './slider/slider'

const Forecast7Days: React.FC = () => {
  const selectedCity = useSelector(
    (state: IState) => state.selectCity.selectedCity.city
  )

  let fragment = <Slider />

  if (selectedCity === 'Select city') {
    fragment = <Placeholder border={'1px dashed #8083a4'} />
  }
  return (
    <Wrapper className="main__forecast-7-days">
      <Title>7 Days Forecast</Title>
      <SelectCity />
      {fragment}
    </Wrapper>
  )
}

export default Forecast7Days

interface IState {
  selectCity: {
    selectedCity: {
      city: string
    }
  }
}
