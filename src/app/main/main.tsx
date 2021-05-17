import React from 'react'
import Forecast7Days from '../forecast-7-days/forecast-7-days'
import ForecastHistory from '../forecast-history/forecast-history'

function Main() {
  return (
    <main className="app__main">
      <Forecast7Days />
      <ForecastHistory />
    </main>
  )
}

export default Main
