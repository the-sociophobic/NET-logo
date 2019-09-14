import ResizeObserver from 'resize-observer-polyfill'

import Logo from './Logo'

export default class ThreeScene {
  constructor(props) {
    window.onload = this.init.bind(this)
  }

  init() {
    const ViewerDiv = document.getElementById("three-scene")
    this.resizeObs = new ResizeObserver(this.updateDimensions.bind(this))
      .observe(ViewerDiv)

    const width = ViewerDiv.clientWidth
    const height = ViewerDiv.clientHeight

    //ADD RENDERER
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    this.renderer.setSize(width, height)
    this.renderer.setPixelRatio(1)
    ViewerDiv.appendChild(this.renderer.domElement)

    //ADD SCENE
    this.scene = new THREE.Scene()

    //ADD CAMERA
    this.camera = new THREE.PerspectiveCamera(
      75,
      width / height,
      0.1,
      1000
    )
    this.camera.position.set(0, 0, 6)

    this.Logo = new Logo({scene: this.scene})

    if (!this.frameId)
      this.frameId = requestAnimationFrame(this.animate.bind(this))
  }

  updateDimensions = () => {
    const ViewerDiv = document.getElementById("three-scene")
    this.camera.aspect = ViewerDiv.clientWidth / ViewerDiv.clientHeight
    this.camera.updateProjectionMatrix()
    this.renderer.setSize(ViewerDiv.clientWidth, ViewerDiv.clientHeight)
  }

  animate = () => {
    this.renderer.render(this.scene, this.camera)
    this.frameId = window.requestAnimationFrame(this.animate.bind(this))
  }

}




  // componentWillUnmount(){
  //   this.units.forEach(unit => unit.dispose())
  //   cancelAnimationFrame(this.frameId)
  //   // this.viewerRef.removeChild(this.renderer.domElement)
  // }

