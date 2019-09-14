import logoImage from './img/normalMap.png'
import defaultBackground from './img/defaultBackground.jpg'

import { Refractor } from './Refractor'
import { WaterRefractionShader } from './WaterRefractionShader'

const clamp = (value, min, max) => Math.min(max, Math.max(value, min))

export default class Logo {
  constructor(props) {
    const { scene } = props

    const geometry = new THREE.PlaneGeometry(19.20, 10.80, 1, 1)

    const backgroundImage = document.getElementById("logo-background") ?
      document.getElementById("logo-background").src
      :
      defaultBackground

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

      document.addEventListener('mousemove', e => {
        const threeSceneDiv = document.getElementById("three-scene")

        if (e.pageX && e.pageY) {
          this.fullyVisiblePlane.position.set(
            -clamp((e.pageX - threeSceneDiv.offsetWidth / 2) / threeSceneDiv.offsetWidth, -.5, .5) * 3.3,
            clamp((e.pageY - threeSceneDiv.offsetHeight / 2) / threeSceneDiv.offsetHeight, -.5, .5) * 1.85,
            this.fullyVisiblePlane.position.z)

          this.additionalPlane.position.set(
            -clamp((e.pageX - threeSceneDiv.offsetWidth / 2) / threeSceneDiv.offsetWidth, -.5, .5) * 3.3,
            clamp((e.pageY - threeSceneDiv.offsetHeight / 2) / threeSceneDiv.offsetHeight, -.5, .5) * 1.85,
            this.additionalPlane.position.z)
          }
      })

      scene.add(this.fullyVisiblePlane)
      scene.add(this.additionalPlane)
    })


    //REFRACTION
    new THREE.TextureLoader()
    .load(logoImage, texture => {

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
}