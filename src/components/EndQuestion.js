import React from 'react'

function EndQuestion() {
  return (
    <li className="game">
      <section className="game__content">
        <h2 className="game__End-title">The End of The Questions</h2>
      </section>
      <div className="game__icon doubleTap">
        <div className="doubleTap__icon"></div>
        <p className="doubleTap__text">Double tap <br/>to return to menu</p>
      </div>
    </li> 
  )
}

export default EndQuestion