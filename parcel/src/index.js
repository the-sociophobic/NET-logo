import ThreeScene from './THREE/ThreeScene'
import Logo from './THREE/Logo'
import EasterEgg from './THREE/EasterEgg'

import './styles/index.sass'

new ThreeScene({units: [
  Logo,
  EasterEgg,
]})