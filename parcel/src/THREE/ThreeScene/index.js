import ResizeObserver from 'resize-observer-polyfill'


export default class ThreeScene {
  constructor(props) {
    this.props = props
    //Wait for css to apply to elem size. Should prevent infinite event firing
    //React's componentDidMount() alternative
    window.onload = () => {
      var tryCounter = 0
      const elementLoadedChecker = setInterval(() => {
        const ViewerDiv = document.getElementById("three-scene")
        if (tryCounter >= 25) {
          clearInterval(elementLoadedChecker)
          return
        }
        if (!ViewerDiv) {
          console.log("no #three-scene element in the DOM")
          tryCounter++
          return
        }
        clearInterval(elementLoadedChecker)
        console.log("injecting ThreeScene to #three-scene in 150ms")
        setTimeout(() => this.init.bind(this)(), 150)
      }, 200)
    }
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
      type: W > 720 ? "web" : "mobile",
      switchToEasterEgg: () => this.units.forEach(unit => unit.switchToEasterEgg && unit.switchToEasterEgg())
    }
    this.units = []
    this.props.units.forEach(unit => this.units.push(new unit(props)))

    if (!this.frameId)
      this.frameId = requestAnimationFrame(this.animate.bind(this))
  }

  updateDimensions = () => {
    const ViewerDiv = document.getElementById("three-scene")
    this.camera.aspect = ViewerDiv.clientWidth / ViewerDiv.clientHeight
    this.camera.updateProjectionMatrix()
    this.renderer.setSize(ViewerDiv.clientWidth, ViewerDiv.clientHeight)

    const W = Math.min(window.outerWidth, window.innerWidth)
    W > 720 ? this.units[0].switchType("web") : this.units[0].switchType("mobile")
  }

  animate = () => {
    this.units.forEach(unit => unit.animate())
    this.renderer.render(this.scene, this.camera)
    this.frameId = window.requestAnimationFrame(this.animate.bind(this))
  }

  componentWillUnmount(){
    this.units.forEach(unit => unit.dispose())
    cancelAnimationFrame(this.frameId)
    if (this.renderer.domElement)
      this.viewerRef.removeChild(this.renderer.domElement)
  }

}

