import React from 'react'
import Placeholder from '../placeholder/placeholder'
import SelectCity from '../selectCity/select-city'

import { Wrapper, Title } from './forecast-7-daysStyled'

const Forecast7Days: React.FC = () => {
  return (
    <Wrapper className="main__forecast-7-days">
      <Title>7 Days Forecast</Title>
      <SelectCity />
      <Placeholder />
    </Wrapper>
  )
}

export default Forecast7Days
