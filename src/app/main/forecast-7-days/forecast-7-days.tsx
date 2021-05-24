import React from 'react'
import { useSelector } from 'react-redux'

import Placeholder from '../placeholder/placeholder'
import SelectCity from '../selectCity/select-city'
import { Wrapper, Title } from './forecast-7-days-styled'
import Slider from './slider/slider'
import { IState } from './interfaces'

const Forecast7Days: React.FC = () => {
  const parent: string = 'Forecast7DaysSelect'
  const selectedCity = useSelector(
    (state: IState) => state.Forecast7DaysSelect.selectedCity.city
  )
  const selectState = useSelector((state: IState) => state.Forecast7DaysSelect)

  let fragment = <Slider />

  if (selectedCity === 'Select city') {
    fragment = <Placeholder border={'1px dashed #8083a4'} />
  }
  return (
    <Wrapper className="main__forecast-7-days">
      <Title>7 Days Forecast</Title>
      <SelectCity {...{ ...selectState, parent }} />
      {fragment}
    </Wrapper>
  )
}

export default Forecast7Days
