import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { IState } from './interfaces'
import SelectCity from '../selectCity/select-city'
import Card from '../card/card'

import { Wrapper, Title, CustomDatePicker } from './forecast-history-styled'
import Placeholder from '../placeholder/placeholder'
import 'antd/dist/antd.css'
import { ChangeDate } from './../../../redux/actions'

const ForecastHistory: React.FC = () => {
  const dispatch = useDispatch()
  const parent: string = 'ForecastHistorySelect'
  const selectedCity = useSelector(
    (state: IState) => state.ForecastHistorySelect.selectedCity.city
  )
  const selectState = useSelector(
    (state: IState) => state.ForecastHistorySelect
  )
  const datePicker = useSelector((state: IState) => state.datePicker)
  const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY']
  let fragment = <Card />

  if (selectedCity === 'Select city' || !datePicker) {
    fragment = <Placeholder border={'none'} />
  }
  return (
    <Wrapper>
      <Title>Forecast for a Date in the Past</Title>
      <SelectCity {...{ ...selectState, parent }} />
      <CustomDatePicker
        onChange={(moment, dateString) =>
          dispatch(ChangeDate(moment, dateString))
        }
        format={dateFormatList}
      />
      {fragment}
    </Wrapper>
  )
}

export default ForecastHistory
