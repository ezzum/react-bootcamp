import {} from './types'
import { initialState } from './initialState'

export function rootReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state
  }
}
