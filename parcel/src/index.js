import React from 'react'
import ReactDOM from 'react-dom'

import ThreeScene from './THREE/ThreeScene'
import Logo from './THREE/Logo'
import EasterEgg from './THREE/EasterEgg'
import App from './components/App'

import './styles/index.sass'


new ThreeScene({units: [
  Logo,
  EasterEgg,
]})

let tryCounter = 0
let elementLoadedChecker = setInterval(() => {
  const elem = document.getElementById('quiz')
  if (tryCounter >= 25)
    clearInterval(elementLoadedChecker)
  if (!elem) {
    tryCounter++
    console.log("no #quiz element in the DOM")
    return
  }
  ReactDOM.render(<App />, elem)
  clearInterval(elementLoadedChecker)
}, 200)
