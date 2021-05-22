export interface IState {
  selectCity: {
    isOpen: boolean
    selectedCity: ICity
    cityItems: ICity[]
  }
}

export interface ICity {
  city: string
  latitude: number
  longitude: number
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
