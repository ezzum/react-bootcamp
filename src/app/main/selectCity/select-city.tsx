import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { CityClick, SelectCityClick } from '../../../redux/actions'
import { ICity, IState, IProps } from './interfaces'
import { Wrapper, SelectedCity, Value, Ul, Li } from './select-city-styled'

const SelectCity: React.FC<IProps> = (props: IProps) => {
  const dispatch = useDispatch()
  const { parent, isOpen } = props
  const { city } = props.selectedCity
  const cityItems = useSelector((state: IState) => state.cityItems)
  const cityList = cityItems.map((item: ICity) => {
    return (
      <Li
        key={item.city}
        onClick={(event: React.SyntheticEvent) => {
          dispatch(
            CityClick(event.currentTarget.textContent, cityItems, parent)
          )
        }}
      >
        {item.city}
      </Li>
    )
  })

  return (
    <Wrapper
      onClick={() => dispatch(SelectCityClick(parent))}
      IsOpen={isOpen}
      className="app__select-city"
    >
      <SelectedCity tabIndex={0}>
        <Value selectedCity={city}>{city}</Value>
      </SelectedCity>
      {isOpen ? <Ul>{cityList}</Ul> : null}
    </Wrapper>
  )
}

export default SelectCity
