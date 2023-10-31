import React, { Component } from 'react'
import  '../BT5.css'
import BT5_1 from './BT5_1'
import BT5_2 from './BT5_2'

export default class BT5 extends Component {
  render() {
    return (
      <>
      <div className="container">
  <div className="row">
    <div className="col-md-12">
      <div className="card">
        <BT5_1></BT5_1>
        <BT5_2></BT5_2>
      </div>
    </div>
  </div>
</div>

      </>
    )
  }
}
