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
    const geometry = new THREE.PlaneGeometry(3, 3, 1, 1)
    const tempMaterial = new THREE.MeshBasicMaterial({color: "#aabbcc"})

    // backgrounds
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