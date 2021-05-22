import {
  CITY_CLICK,
  SELECT_CITY_CLICK,
  GET_FORECAST_7_DAYS,
  RIGHT_CLICK,
  LEFT_CLICK,
  END_SLIDE
} from './types'
import { initialState } from './initialState'

export function rootReducer(state = initialState, action) {
  switch (action.type) {
    case SELECT_CITY_CLICK:
      return {
        ...state,
        [action.value]: {
          ...state[action.value],
          isOpen: !state[action.value].isOpen
        }
      }
    case CITY_CLICK:
      return {
        ...state,
        [action.value.parent]: {
          ...state[action.value.parent],
          selectedCity: action.value.selectedCity
        }
      }
    case GET_FORECAST_7_DAYS:
      return {
        ...state,
        daysForecast: action.value
      }
    case RIGHT_CLICK:
      return {
        ...state,
        daysForecast: action.value
      }
    case LEFT_CLICK:
      return {
        ...state,
        daysForecast: action.value
      }
    case END_SLIDE:
      return {
        ...state,
        arrow: action.value
      }
    default:
      return state
  }
}
