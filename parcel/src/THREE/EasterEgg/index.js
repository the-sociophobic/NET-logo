// import { Refractor } from './Refractor'
// import { WaterRefractionShader } from './WaterRefractionShader'
import backgrounds from '../Logo/img/backgrounds'

import Unit from '../Unit'

import tapEvent from '../../utils/tapEvent'


const clicksNeeded = 10

export default class EasterEgg extends Unit {
  constructor(props) {
    super(props)
    const { renderer } = props

    this.clickCounter = 0
    renderer.domElement.addEventListener("click", this.registerClick)
    tapEvent(renderer.domElement, this.registerClick)
  }

  registerClick = () => {
    this.clickCounter++
    console.log(`clicks before R4VE: ${clicksNeeded - this.clickCounter}`)
    if (this.clickCounter === clicksNeeded)
      this.init()
  }

  init = () => {
    this.props.switchToEasterEgg()

    var sound      = document.createElement('audio')
    sound.autoplay = "autoplay"
    sound.src      = 'https://schedule.tochkadostupa.spb.ru/net-easteregg-music'
    sound.type     = 'audio/mp3'
    this.props.renderer.domElement.appendChild(sound)
  }

  handleScroll = e => {

  }
  
  handleMouseMove = e => {

  }


  dispose = () => {
    if (this.clickCounter >= clicksNeeded)
      if (isTouchDevice())
        clearInterval(this.scrollUpdateInterval)
      else
        window.removeEventListener('mousemove', this.handleMouseMove, false)
  }
  
}