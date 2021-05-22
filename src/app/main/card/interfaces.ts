export interface IWeatherIconProps {
  icon: string
}

export interface IWrapperProps {
  width: string
  left: string
  top: string
  transform: string
}

export interface IState {
  datePicker: string
  ForecastHistorySelect: {
    selectedCity: ICity
  }
  historyForecast: {
    dt: number
    temp: number
    weather: [
      {
        icon: string
      }
    ]
  }
}

export interface ICity {
  city: string
  latitude: number
  longitude: number
}
