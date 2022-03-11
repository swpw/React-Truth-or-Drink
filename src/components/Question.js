import React from 'react'

function Question({difficulty, en, id}) {

  return (
    <li className="game">
      <section className={`game__content game__content--${difficulty}`}>
        <h2 className={`game__title game__title--${difficulty}`}>{difficulty} #{id}</h2>
        <p className="game__description">{en}</p>
      </section>
      <div className="game__icon doubleTap">
        <div className="doubleTap__icon"></div>
        <p className="doubleTap__text">Double tap <br/>to next question</p>
      </div>
    </li>
  )
}

export default Question