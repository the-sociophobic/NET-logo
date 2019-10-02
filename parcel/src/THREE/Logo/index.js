import backgrounds from './img/backgrounds'

import { Refractor } from './Refractor'
import WaterRefractionShader from './WaterRefractionShader'
import BrokenWaterShader from './BrokenWaterShader'

import isTouchDevice from '../../utils/isTouchDevice'

import TransitionsHandler from '../TransitionsHandler'

const zOffset = 20
const clamp = (value, min, max) => Math.min(max, Math.max(value, min))
const hideMesh = mesh => {
  mesh.position.set(
    mesh.position.x,
    mesh.position.y,
    mesh.position.z - zOffset
  )
}
const showMesh = mesh => {
  mesh.position.set(
    mesh.position.x,
    mesh.position.y,
    mesh.position.z + zOffset
  )
}


export default class Logo extends TransitionsHandler {
  constructor(props) {
    super(props)

    const { scene, type } = props

    this.type = type
    this.web = {}
    this.mobile = {}

    const geometryWeb = new THREE.PlaneGeometry(19.20, 10.80, 1, 1)
    this.geometryWeb = geometryWeb
    const geometryMobile = new THREE.PlaneGeometry(12.80, 12.80, 1, 1)
    this.geometryMobile = geometryMobile
    let invisibleMaterial = new THREE.MeshBasicMaterial({color: "#aabbcc"})

    this.web.fullyVisiblePlane = new THREE.Mesh(geometryWeb, invisibleMaterial)
    this.web.fullyVisiblePlane.position.set(0, 0, -1 - (type === "web" ? 0 : zOffset))
    this.web.fullyVisiblePlane.scale.set(1.02, 1.02, 1.02)
    scene.add(this.web.fullyVisiblePlane)
    this.mobile.fullyVisiblePlane = new THREE.Mesh(geometryMobile, invisibleMaterial)
    this.mobile.fullyVisiblePlane.position.set(0, 0, -1 - (type === "mobile" ? 0 : zOffset))
    this.mobile.fullyVisiblePlane.scale.set(.52, .95, .95)
    scene.add(this.mobile.fullyVisiblePlane)

    this.web.additionalPlane = new THREE.Mesh(geometryWeb, invisibleMaterial)
    this.web.additionalPlane.position.set(0, 0, -1.1 - (type === "web" ? 0 : zOffset))
    this.web.additionalPlane.scale.set(1.3, 1.3, 1.3)
    scene.add(this.web.additionalPlane)
    this.mobile.additionalPlane = new THREE.Mesh(geometryMobile, invisibleMaterial)
    this.mobile.additionalPlane.position.set(0, 0, -1.1 - (type === "mobile" ? 0 : zOffset))
    this.mobile.additionalPlane.scale.set(1.3, 1.3, 1.3)
    scene.add(this.mobile.additionalPlane)


    this.web.refractor = new Refractor( geometryWeb, {
      color: 0x999999,
      textureWidth: 1024,
      textureHeight: 1024,
      shader: WaterRefractionShader
    } )
    scene.add( this.web.refractor )
    this.mobile.refractor = new Refractor( geometryMobile, {
      color: 0x999999,
      textureWidth: 1024,
      textureHeight: 1024,
      shader: WaterRefractionShader
    } )
    this.mobile.refractor.scale.set(.83, .83, .83)
    scene.add( this.mobile.refractor )
    type === "web" ? this.mobile.refractor.position.set(0, 0, -zOffset) : this.web.refractor.position.set(0, 0, -zOffset)



    if (isTouchDevice()) {
      this.handleScroll()
      this.scrollUpdateInterval = setInterval(() => this.handleScroll(), 5)
    }
    else
      window.addEventListener('mousemove', this.handleMouseMove, false)


    const randomElem = array => array[Math.round(Math.random() * (array.length - 1))]
    const backgroundWeb = randomElem(backgrounds.web)
    const backgroundMobile = randomElem(backgrounds.mobile)

    const maskWeb = backgrounds.webMask
    const maskMobile = backgrounds.mobileMask

    let refractionK = 0.15


    var texturesLoaded = 0
    const textureLoaded = () => {
      texturesLoaded++
      if (texturesLoaded >= 4)
        setTimeout(() => {
          const showThreeSceneInterval = setInterval(() => {
            const elem = document.getElementById("three-scene")
            
            if (!elem)
              return
      
            elem.style.opacity = 1
            clearInterval(showThreeSceneInterval)
          }, 10)
        }, 50)
    }

    //BACKGROUND
    new THREE.TextureLoader()
    .load(backgroundWeb, texture => {
      let material = new THREE.MeshBasicMaterial({ map: texture })
      material.map.minFilter = THREE.LinearFilter
      this.web.fullyVisiblePlane.material = material
      this.web.additionalPlane.material = material
      textureLoaded()
    })
    new THREE.TextureLoader()
    .load(backgroundMobile, texture => {
      let material = new THREE.MeshBasicMaterial({ map: texture })
      material.map.minFilter = THREE.LinearFilter
      this.mobile.fullyVisiblePlane.material = material
      this.mobile.additionalPlane.material = material
      textureLoaded()
    })


    //REFRACTION
    new THREE.TextureLoader()
    .load(maskWeb, texture => {
      this.web.refractor.material.uniforms[ "tDudv" ].value = texture
      this.web.refractor.material.uniforms[ "refractionK" ].value = refractionK
      textureLoaded()
    })
    new THREE.TextureLoader()
    .load(maskMobile, texture => {
      this.mobile.refractor.material.uniforms[ "tDudv" ].value = texture
      this.mobile.refractor.material.uniforms[ "refractionK" ].value = refractionK
      textureLoaded()
    })
  }


  switchType = type => {
    if (type === this.type || (type !== "web" && type !== "mobile"))
      return
    
    this.type = type
    let toHide, toShow
    if (type === "web") {
      toHide = this.mobile
      toShow = this.web
    } else {
      toHide = this.web
      toShow = this.mobile
    }
    showMesh(toShow.fullyVisiblePlane)
    showMesh(toShow.additionalPlane)
    showMesh(toShow.refractor)

    hideMesh(toHide.fullyVisiblePlane)
    hideMesh(toHide.additionalPlane)
    hideMesh(toHide.refractor)
  }


  handleScroll = e => {
    const threeSceneElement = document.getElementById("three-scene")
    // const getBodyScrollTop = () => Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop, threeSceneElement.scrollTop)
    const getBodyScrollTop = () => Math.max(-threeSceneElement.getBoundingClientRect().top, 0)
    const alpha = clamp(getBodyScrollTop() / threeSceneElement.offsetHeight * .5, 0, .5)
  
    this.web.fullyVisiblePlane.position.set(
      -alpha * 3.3,
      alpha * 1.85,
      this.web.fullyVisiblePlane.position.z)
    this.mobile.fullyVisiblePlane.position.set(
      -alpha * 3.6,
      alpha * 1.85 - .15,
      this.mobile.fullyVisiblePlane.position.z)
  
    this.web.additionalPlane.position.set(
      -alpha * 3.3,
      alpha * 1.85,
      this.web.additionalPlane.position.z)
    this.mobile.additionalPlane.position.set(
      -alpha * 3.3,
      alpha * 1.85,
      this.mobile.additionalPlane.position.z)
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
      // super.animate() //ES6 transplier needed
      this.animate()
      this.unregisterAllTransitions()
      this.handleFirstMouseMove(e)
      return
    }
  
    const alphaX = -clamp(e.pageX / window.innerWidth - .5, -.5, .5)
    const alphaY = clamp(e.pageY / window.innerHeight - .5, -.5, .5)
  
    this.web.fullyVisiblePlane.position.set(
      alphaX * 3.3,
      alphaY * 1.85,
      this.web.fullyVisiblePlane.position.z)
    this.mobile.fullyVisiblePlane.position.set(
      alphaX * 3.3,
      alphaY * 1.85,
      this.mobile.fullyVisiblePlane.position.z)
  
    this.web.additionalPlane.position.set(
      alphaX * 3.3,
      alphaY * 1.85,
      this.web.additionalPlane.position.z)
    this.mobile.additionalPlane.position.set(
      alphaX * 3.3,
      alphaY * 1.85,
      this.mobile.additionalPlane.position.z)
  }

  handleFirstMouseMove = e => {
    const alphaX = -clamp(e.pageX / window.innerWidth - .5, -.5, .5)
    const alphaY = clamp(e.pageY / window.innerHeight - .5, -.5, .5)
    const fullyVisiblePlaneNewPosWeb = new THREE.Vector3(
      alphaX * 3.3,
      alphaY * 1.85,
      this.web.fullyVisiblePlane.position.z
    )
    const fullyVisiblePlaneNewPosMobile = new THREE.Vector3(
      alphaX * 3.3,
      alphaY * 1.85,
      this.mobile.fullyVisiblePlane.position.z
    )
    const additionalPlaneNewPosWeb = new THREE.Vector3(
      alphaX * 3.3,
      alphaY * 1.85,
      this.web.additionalPlane.position.z
    )
    const additionalPlaneNewPosMobile = new THREE.Vector3(
      alphaX * 3.3,
      alphaY * 1.85,
      this.mobile.additionalPlane.position.z
    )

    let numberOfFrames = new THREE.Vector3()
      .subVectors(this.web.fullyVisiblePlane.position, fullyVisiblePlaneNewPosWeb)
      .lengthSq() ** .5 * 5
    numberOfFrames = Math.ceil(numberOfFrames)

    this.registerTransition(
      this.web.fullyVisiblePlane.position,
      fullyVisiblePlaneNewPosWeb,
      numberOfFrames,
      'easeInOut2'
    )
    this.registerTransition(
      this.mobile.fullyVisiblePlane.position,
      fullyVisiblePlaneNewPosMobile,
      numberOfFrames,
      'easeInOut2'
    )
    this.registerTransition(
      this.web.additionalPlane.position,
      additionalPlaneNewPosWeb,
      numberOfFrames,
      'easeInOut2'
    )
    this.registerTransition(
      this.mobile.additionalPlane.position,
      additionalPlaneNewPosMobile,
      numberOfFrames,
      'easeInOut2'
    )
  }

  dispose = () => {
    if (isTouchDevice())
      clearInterval(this.scrollUpdateInterval)
    else
      window.removeEventListener('mousemove', this.handleMouseMove, false)
  }

  switchToEasterEgg() {
    hideMesh(this.web.fullyVisiblePlane)
    hideMesh(this.web.additionalPlane)
    hideMesh(this.web.refractor)

    hideMesh(this.mobile.fullyVisiblePlane)
    hideMesh(this.mobile.additionalPlane)
    hideMesh(this.mobile.refractor)

    this.props.scene.background = new THREE.CubeTextureLoader()
    .load( [ backgrounds.easterEggBG, backgrounds.easterEggBG, backgrounds.easterEggBG, backgrounds.easterEggBG, backgrounds.easterEggBG, backgrounds.easterEggBG ] );

    this.easterEgg = {
      web: {},
      mobile: {},
    }
    this.easterEgg.web.refractor = new Refractor( this.geometryWeb, {
      color: 0x999999,
      textureWidth: 1024,
      textureHeight: 1024,
      shader: BrokenWaterShader
    } )
    this.easterEgg.mobile.refractor = new Refractor( this.geometryMobile, {
      color: 0x999999,
      textureWidth: 1024,
      textureHeight: 1024,
      shader: BrokenWaterShader
    } )
    if (isTouchDevice())
      this.props.scene.add(this.easterEgg.mobile.refractor)
    else
      this.props.scene.add(this.easterEgg.web.refractor)
    this.mobile.refractor.scale.set(.83, .83, .83)
    new THREE.TextureLoader()
    .load(backgrounds.easterEggMask, texture => {
      this.easterEgg.web.refractor.material.uniforms[ "tDudv" ].value = texture
      this.easterEgg.mobile.refractor.material.uniforms[ "tDudv" ].value = texture
    })

    this.easterEggPlanes = []
    backgrounds.easterEgg.forEach(bg => {
      new THREE.TextureLoader()
      .load(bg, texture => {
        let material = new THREE.MeshBasicMaterial({
          map: texture,
          transparent: true,
          opacity: .125 + Math.random() * .35
        })
        material.map.minFilter = THREE.LinearFilter
        const newPlane = new THREE.Mesh(this.geometryWeb, material)
        this.easterEggPlanes.push(newPlane)
        this.props.scene.add(newPlane)
        newPlane.position.set(
          (Math.random() - .5) * 18,
          (Math.random() - .5) * 12,
          (Math.random() - 1) * 12
        )
        newPlane.scale.set(
          Math.random() * 1.1 + .666,
          Math.random() * 1.1 + .666,
          Math.random() * 1.1 + .666
        )
        this.registerTransition(
          newPlane.position,
          new THREE.Vector3(
            (Math.random() - .5) * 18,
            (Math.random() - .5) * 12,
            (Math.random() - 1) * 12
            ),
          300 + Math.random() * 300,
          'easeInOut2'    
        )
      })  
    })
  }
  
}