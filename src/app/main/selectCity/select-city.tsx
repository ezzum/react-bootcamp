import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { CityClick, SelectCityClick } from '../../../redux/actions'
import { ICity, IState } from './interfaces'
import { Wrapper, SelectedCity, Value, Ul, Li } from './select-cityStyled'

const SelectCity: React.FC = () => {
  const dispatch = useDispatch()

  const dropDownIsOpen = useSelector((state: IState) => state.selectCity.isOpen)

  const selectedCity = useSelector(
    (state: IState) => state.selectCity.selectedCity.city
  )

  const cityItems = useSelector((state: IState) => state.selectCity.cityItems)

  const cityList = cityItems.map((item: ICity) => {
    return (
      <Li
        key={item.city}
        onClick={(event: React.SyntheticEvent) =>
          dispatch(CityClick(event.currentTarget.textContent, cityItems))
        }
      >
        {item.city}
      </Li>
    )
  })

  return (
    <Wrapper
      onClick={() => dispatch(SelectCityClick())}
      IsOpen={dropDownIsOpen}
      className="app__select-city"
    >
      <SelectedCity tabIndex={0}>
        <Value selectedCity={selectedCity}>{selectedCity}</Value>
      </SelectedCity>
      {dropDownIsOpen ? <Ul>{cityList}</Ul> : null}
    </Wrapper>
  )
}

export default SelectCity
