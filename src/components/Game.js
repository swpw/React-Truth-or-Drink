import React, { useState, useEffect } from 'react'
import Glide from '@glidejs/glide'
import Header from './Header'
import Question from './Question'
import EndQuestion from './EndQuestion'
import getQuestions from './getQuestions'

function Game({setView}) {
  const [ questions, setQuestions ] = useState([])
  const [ glide, setGlide ] = useState(null)

  useEffect(()=>{
    getQuestions()
      .then(res => setQuestions(res))
      .then(()=> setGlide(new Glide('.glide', {
        startAt: 0,
        perView: 1,
        gap: 0,
        perTouch: 1,
        animationDuration: 500,
        rewind: false
      }).mount()))
  }, [])

  const handleClick = () => {
    glide._i === questions.length ? setView('MainMenu') : glide.go('>')
  }

  return (
    <>
      <Header setView={setView} />
      <div className="glide" onDoubleClick={handleClick}>
        <div className="glide__track" data-glide-el="track">
          <ul className="glide__slides">
            {
              questions.map(({difficulty, en, id}, i) => {
                return <Question key={i} difficulty={difficulty} en={en} id={id} />
              })
              .filter(() => {return <EndQuestion key={questions.lnegth}/>})
            }
          </ul>
        </div>
      </div>
    </>
  )
}

export default Game