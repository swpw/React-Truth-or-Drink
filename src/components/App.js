import React, { useState } from 'react'
import MainMenu from './MainMenu'
import Game from './Game'

const App = () => {
  const [ view, setView ] = React.useState('MainMenu')

  const activeView = () => {
    switch (view) {
      case 'MainMenu':
        return <MainMenu setView={setView} />
      case 'Game':
        return <Game setView={setView} />
      default:
        return <MainMenu setView={setView} />
    }
  }
  return (
    <>
      { activeView() }
    </>
  )
}

export default App