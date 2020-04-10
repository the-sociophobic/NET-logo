import React from 'react'
import ReactDOM from 'react-dom'

import App from './components/App'

import './styles/index.sass'


// new ThreeScene({units: [
//   Logo,
//   EasterEgg,
// ]})

let tryCounter = 0
let elementLoadedChecker = setInterval(() => {
  const quizElem = document.getElementById('quiz')
  const threeSceneElem = document.getElementById('three-scene')

  if (tryCounter >= 25)
    clearInterval(elementLoadedChecker)
  if (!quizElem && !threeSceneElem) {
    tryCounter++
    console.log("no #three-scene element in the DOM")
    console.log("no #quiz element in the DOM")
    return
  }
  if (threeSceneElem)
    ReactDOM.render(<App threeScene />, threeSceneElem)
  if (quizElem)
    ReactDOM.render(<App quiz />, quizElem)
  clearInterval(elementLoadedChecker)
}, 200)
