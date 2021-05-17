import React from 'react'

import './app.scss'
import Header from './header/header'
import Footer from './footer/footer'
import Main from './main/main'

const App: React.FC = () => {
  return (
    <div className="app">
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default App
