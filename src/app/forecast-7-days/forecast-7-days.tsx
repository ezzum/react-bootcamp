import React from 'react'

import { Wrapper, Title } from './forecast-7-daysStyled'

const Forecast7Days: React.FC = () => {
  return (
    <Wrapper className="main__forecast-7-days">
      <Title>7 Days Forecast</Title>
      <select>
        <option selected disabled hidden>
          Select city
        </option>
        <option>Самара</option>
        <option>Тольтти</option>
      </select>
      <div className="placeholder">
        <div className="placeholder__img"></div>
        <p className="placeholder__text">
          Fill in all the Fields and weather wil be displayed
        </p>
      </div>
    </Wrapper>
  )
}

export default Forecast7Days
