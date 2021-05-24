export interface IState {
  Forecast7DaysSelect: {
    isOpen: boolean
    selectedCity: {
      city: string
      latitude: number
      longitude: number
    }
  }
}
