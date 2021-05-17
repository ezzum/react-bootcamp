import React from 'react'

import './header.scss'

const Header: React.FC = () => {
  return (
    <header className="app__header">
      <h1 className="app__title title">
        <span className="title__weather">Weather</span>
        <span className="title__forecast">forecast</span>
      </h1>
    </header>
  )
}

export default Header
