export interface IState {
  Forecast7DaysSelect: {
    isOpen: boolean
    selectedCity: ICity
  }
  cityItems: ICity[]
}

export interface ICity {
  city: string
  latitude: number
  longitude: number
}

export interface IProps {
  isOpen: boolean
  selectedCity: ICity
  parent: string
}

export interface IEvent {
  target: {
    textContent: string
  }
}

export interface IPropsWrapper {
  IsOpen: boolean
}

export interface IPropsValue {
  selectedCity: string
}
