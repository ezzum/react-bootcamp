export interface IState {
  Forecast7DaysSelect: {
    selectedCity: {
      city: string
      latitude: number
      longitude: number
    }
  }
  daysForecast: []
  arrow: {
    left: boolean
    right: boolean
  }
}

export interface IItem {
  dt: number
  temp: {
    day: number
  }
  weather: [
    {
      icon: string
    }
  ]
  visible: boolean
}

export interface IWeatherIconProps {
  icon: string
}
export interface IArrowLeftProps {
  left: boolean
}
export interface IArrowRightProps {
  right: boolean
}
