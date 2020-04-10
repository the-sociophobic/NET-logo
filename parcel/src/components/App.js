import React, { Component } from 'react'

import ThreeScene from '../THREE/ThreeScene'
import myScene from '../THREE/myScene'
import Quiz from './Quiz'


export default class App extends Component {
  render = () => (
    <>
      {this.props.threeScene && <ThreeScene myScene={myScene} />}
      {this.props.quiz && <Quiz />}
    </>
  )
}