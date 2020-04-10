import React, { Component } from 'react'

import ThreeScene from '../THREE/ThreeScene'
import myScene from '../THREE/myScene'
import Quiz from './Quiz'


export default class App extends Component {
  render = () => (
    <>
      <div id="react-injected-div" />
      {this.props.threeScene && <ThreeScene myScene={myScene} />}
      {this.props.quiz && <Quiz />}
    </>
  )
}