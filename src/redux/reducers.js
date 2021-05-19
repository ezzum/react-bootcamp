import { CITY_CLICK, SELECT_CITY_CLICK } from './types'
import { initialState } from './initialState'

export function rootReducer(state = initialState, action) {
  switch (action.type) {
    case SELECT_CITY_CLICK:
      return {
        ...state,
        selectCity: {
          ...state.selectCity,
          isOpen: !state.selectCity.isOpen
        }
      }
    case CITY_CLICK:
      return {
        ...state,
        selectCity: {
          ...state.selectCity,
          selectedCity: action.value
        }
      }
    default:
      return state
  }
}
