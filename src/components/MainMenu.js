import React from 'react'

const MainMenu = ({setView}) => {
  return (
    <section className="mainMenu">
      <div className="mainMenu__imageContainer"></div>
      <section className="mainMenu__sectionContent">
        <section className="mainMenu__sectionTop">
          <h1 className="mainMenu__title">Truth or Drink</h1>
          <p className="mainMenu__paragraphCatchphrase">Answer the question, or<br/> take a drink</p>
          <p className="mainMenu__paragraphDescription">By the end of the night, we’ll all be better friends after asking the questions we’ve never dared to ask out loud. If anything, it’s worth a shot. </p>
        </section>
        <section className="mainMenu__sectionBot">
          <button id="btn-game" className="mainMenu__button" onClick={()=>{setView('Game')}}>Play the game</button>
        </section>
      </section>
    </section>
  )
}

export default MainMenu