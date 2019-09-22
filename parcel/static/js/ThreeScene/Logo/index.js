import defaultMask from './img/defaultMask.png'
import defaultBackground from './img/defaultBackground.jpg'

import { Refractor } from './Refractor'
import { WaterRefractionShader } from './WaterRefractionShader'

import TransitionsHandler from '../TransitionsHandler'

const clamp = (value, min, max) => Math.min(max, Math.max(value, min))
const isTouchDevice = () => {  
  try {  
    document.createEvent("TouchEvent");  
    return true;  
  } catch (e) {  
    return false;  
  }  
}


export default class Logo extends TransitionsHandler {
  constructor(props) {
    super(props)

    const { scene } = props

    const geometry = new THREE.PlaneGeometry(19.20, 10.80, 1, 1)

    const backgroundImage = document.getElementById("logo-background") ?
      document.getElementById("logo-background").src
      :
      defaultBackground
    const maskImage = document.getElementById("logo-mask") ?
      document.getElementById("logo-mask").src
      :
      defaultMask

    let refractionK = document.getElementById("refraction-k") ?
      document.getElementById("refraction-k").textContent
      :
      "0.15"
    refractionK = parseFloat(refractionK)

    //BACKGROUND
    new THREE.TextureLoader()
    .load(backgroundImage, texture => {

      let material = new THREE.MeshBasicMaterial({ map: texture })

      this.fullyVisiblePlane = new THREE.Mesh(geometry, material)
      this.fullyVisiblePlane.position.set(0, 0, -1)
      this.fullyVisiblePlane.scale.set(1.02, 1.02, 1.02)

      this.additionalPlane = new THREE.Mesh(geometry, material)
      this.additionalPlane.position.set(0, 0, -1.1)
      this.additionalPlane.scale.set(1.3, 1.3, 1.3)

      if (isTouchDevice()) {
        this.handleScroll()
        document.addEventListener('wheel', this.handleScroll, false)
        document.addEventListener('touchmove', this.handleScroll, false)
      }
      else
        document.addEventListener('mousemove', this.handleMouseMove, false)

      scene.add(this.fullyVisiblePlane)
      scene.add(this.additionalPlane)
    })


    //REFRACTION
    new THREE.TextureLoader()
    .load(maskImage, texture => {

      let refractor = new Refractor( geometry, {
        color: 0x999999,
        textureWidth: 1024,
        textureHeight: 1024,
        shader: WaterRefractionShader
      } );

      refractor.material.uniforms[ "tDudv" ].value = texture
      refractor.material.uniforms[ "refractionK" ].value = refractionK

      scene.add( refractor );
    })

  }


  handleScroll = e => {
    const threeSceneElement = document.getElementById("three-scene")
    const alpha = clamp((document.documentElement.scrollTop || document.body.scrollTop) / threeSceneElement.offsetHeight - .5, -.5, .5)
  
    this.fullyVisiblePlane.position.set(
      -alpha * 3.3,
      alpha * 1.85,
      this.fullyVisiblePlane.position.z)
  
    this.additionalPlane.position.set(
      -alpha * 3.3,
      alpha * 1.85,
      this.additionalPlane.position.z)
  }
  
  handleMouseMove = e => {
    if (!e.pageX || !e.pageY) {
      console.log("no mouse found")
      return
    }

    if (!this.firstMouseMoveFinished) {
      if (this.notFirstMouseEvent)
        if (this.noActiveTransitions()) {
          this.firstMouseMoveFinished = true
          return
        }

      this.notFirstMouseEvent = true
      this.animate()
      this.unregisterAllTransitions()
      this.handleFirstMouseMove(e)
      return
    }
  
    const alphaX = -clamp(e.pageX / window.innerWidth - .5, -.5, .5)
    const alphaY = clamp(e.pageY / window.innerHeight - .5, -.5, .5)
  
    this.fullyVisiblePlane.position.set(
      alphaX * 3.3,
      alphaY * 1.85,
      this.fullyVisiblePlane.position.z)
  
    this.additionalPlane.position.set(
      alphaX * 3.3,
      alphaY * 1.85,
      this.additionalPlane.position.z)
  }

  handleFirstMouseMove = e => {
    const alphaX = -clamp(e.pageX / window.innerWidth - .5, -.5, .5)
    const alphaY = clamp(e.pageY / window.innerHeight - .5, -.5, .5)
    const fullyVisiblePlaneNewPos = new THREE.Vector3(
      alphaX * 3.3,
      alphaY * 1.85,
      this.fullyVisiblePlane.position.z
    )
    const additionalPlaneNewPos = new THREE.Vector3(
      alphaX * 3.3,
      alphaY * 1.85,
      this.additionalPlane.position.z
    )

    let numberOfFrames = new THREE.Vector3()
      .subVectors(this.fullyVisiblePlane.position, fullyVisiblePlaneNewPos)
      .lengthSq() ** .5 * 8
    numberOfFrames = Math.ceil(numberOfFrames)

    this.registerTransition(
      this.fullyVisiblePlane.position,
      fullyVisiblePlaneNewPos,
      numberOfFrames,
      'easeInOut2'
    )
    this.registerTransition(
      this.additionalPlane.position,
      additionalPlaneNewPos,
      numberOfFrames,
      'easeInOut2'
    )
  }
  
}