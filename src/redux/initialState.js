export const initialState = {
  Forecast7DaysSelect: {
    isOpen: false,
    selectedCity: {
      city: 'Select city',
      latitude: 0,
      longitude: 0
    }
  },
  ForecastHistorySelect: {
    isSelected: false,
    isOpen: false,
    selectedCity: {
      city: 'Select city',
      latitude: 0,
      longitude: 0
    }
  },
  datePicker: '',
  cityItems: [
    {
      city: 'Samara',
      latitude: 53.195873,
      longitude: 50.100193
    },
    {
      city: 'Tolyatti',
      latitude: 53.507836,
      longitude: 49.420393
    },
    {
      city: 'Saratov',
      latitude: 51.533557,
      longitude: 46.034257
    },
    {
      city: 'Kazan',
      latitude: 55.796127,
      longitude: 49.106405
    },
    {
      city: 'Krasnodar',
      latitude: 45.03547,
      longitude: 38.975313
    }
  ],
  daysForecast: [
    {
      visible: false
    }
  ],
  historyForecast: {
    weather: [{ icon: '' }]
  },
  arrow: {
    left: true,
    right: true
  }
}
