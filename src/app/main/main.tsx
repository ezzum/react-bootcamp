import React from 'react'

import './main.scss'
import Forecast7Days from '../forecast-7-days/forecast-7-days'
import ForecastHistory from '../forecast-history/forecast-history'

const Main: React.FC = () => {
  return (
    <main className="app__main">
      <Forecast7Days />
      <ForecastHistory />
    </main>
  )
}

export default Main
