import React, { Component } from 'react'

export default class BT3 extends Component {
    constructor(){
        super()
        this.state={
            time: new Date(),
        }
    }
    componentDidMount()
    {

    }
    runTime(){

    }
  render() {
    return (
      <div>
        <h1>XIN CHÀO CÁC BẠN BH LÀ: </h1>
        <p>
            14:30:35
        </p>
      </div>
    )
  }
}
