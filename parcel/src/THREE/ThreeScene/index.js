import ResizeObserver from 'resize-observer-polyfill'

export default class ThreeScene {
  constructor(props) {
    this.props = props
    //Wait for css to apply to elem size. Should prevent infinite event firing
    //React's componentDidMount() alternative
    window.onload = () => {
      const elementLoadedChecker = setInterval(() => {
        const ViewerDiv = document.getElementById("three-scene")
        if (!ViewerDiv) {
          console.log("no #three-scene element in the DOM")
          return
        }
        clearInterval(elementLoadedChecker)
        setTimeout(() => this.init.bind(this)(), 50)
      }, 100)
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

    //ADD UNITS
    const props = {
      scene: this.scene,
      type: window.screen.width > 720 ? "web" : "mobile"
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

    window.screen.width > 720 ? this.units[0].switchType("web") : this.units[0].switchType("mobile")

    console.log(`three-scene elem resized (${ViewerDiv.clientWidth}, ${ViewerDiv.clientHeight})`)
  }

  animate = () => {
    this.units.forEach(unit => unit.animate())
    this.renderer.render(this.scene, this.camera)
    this.frameId = window.requestAnimationFrame(this.animate.bind(this))
  }

  componentWillUnmount(){
    this.units.forEach(unit => unit.dispose())
    cancelAnimationFrame(this.frameId)
    // this.viewerRef.removeChild(this.renderer.domElement)
  }

}

