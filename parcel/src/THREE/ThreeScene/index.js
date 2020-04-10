import React, { Component } from 'react'

import ResizeObserver from 'resize-observer-polyfill'


export default class ThreeScene extends Component {
  constructor(props) {
    super(props)
    this.viewerRef = new React.createRef()
  }

  componentDidMount() {
    const ViewerDiv = this.viewerRef.current
    this.resizeObs = new ResizeObserver(this.updateDimensions.bind(this))
      .observe(ViewerDiv)

    const width = ViewerDiv.clientWidth
    const height = ViewerDiv.clientHeight

    //ADD RENDERER
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    this.renderer.setSize(width, height)
    this.renderer.setPixelRatio(window.devicePixelRatio)
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

    //ADD UNITS
    const W = Math.min(window.outerWidth, window.innerWidth)
    const props = {
      renderer: this.renderer,
      scene: this.scene,
      // type: W > 720 ? "web" : "mobile",
      type: W > 520 ? "web" : "mobile",
      switchToEasterEgg: () => Object.keys(this.units)
        .forEach(unitName =>
          this.units[unitName].switchToEasterEgg && this.units[unitName].switchToEasterEgg())
    }
    this.units = {}

    Object.keys(this.props.myScene.units)
      .forEach(unitName => {
        const unit = this.props.myScene.units[unitName]

        if (!unit.disabled ^ this.unitsToggled)
          this.units[unitName] = new unit.unit(props)
      })

    if (!this.frameId)
      this.frameId = requestAnimationFrame(this.animate.bind(this))
  }

  updateDimensions = () => {
    const ViewerDiv = this.viewerRef && this.viewerRef.current
    if (!this.renderer || !ViewerDiv || !this.camera)
      return
    this.camera.aspect = ViewerDiv.clientWidth / ViewerDiv.clientHeight
    this.camera.updateProjectionMatrix()
    this.renderer.setSize(ViewerDiv.clientWidth, ViewerDiv.clientHeight)

    const W = Math.min(window.outerWidth, window.innerWidth)
    W > 720 ? this.units.Logo.switchType("web") : this.units.Logo.switchType("mobile")
  }

  animate = () => {
    Object.keys(this.units).forEach(unitName => this.units[unitName].animate())
    this.renderer.render(this.scene, this.camera)
    this.frameId = window.requestAnimationFrame(this.animate.bind(this))
  }

  componentWillUnmount(){
    Object.keys(this.units)
      .forEach(unitName => this.units[unitName].dispose())
    while(this.scene.children.length > 0)
      this.scene.remove(this.scene.children[0])

    cancelAnimationFrame(this.frameId)
    // if (this.renderer.domElement)
    //   this.viewerRef.removeChild(this.renderer.domElement)
  }

  render = () => (
    <div
      className="Viewer"
      ref={this.viewerRef}
    />
  )
}

