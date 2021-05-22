export interface IState {
  Forecast7DaysSelect: {
    isSelected: boolean
    isOpen: boolean
    selectedCity: {
      city: string
      latitude: number
      longitude: number
    }
  }
}
