export interface IState {
  ForecastHistorySelect: {
    isOpen: boolean
    selectedCity: {
      city: string
      latitude: number
      longitude: number
    }
  }
  datePicker: string
}
