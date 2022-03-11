import React from 'react'

function Header({setView}) {
  return (
    <header className="header">
      <h1 className="header__logo">Truth or Drink</h1>
      <img className="header__close" src="./assets/close.svg" alt="close" onClick={()=>setView(0)} />
    </header>
  )
}

export default Header