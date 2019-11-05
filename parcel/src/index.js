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

setTimeout(
  () => ReactDOM.render(<App />, document.getElementById('quiz')),
  255
)
