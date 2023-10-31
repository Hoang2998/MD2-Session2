import React, { Component } from 'react'
import BT5_2Header from './BT5_2Header'
import BT5_2Body from './BT5_2Body'

export default class BT5_2 extends Component {
  render() {
    return (
        <div className="table-responsive">
        <table className="table no-wrap user-table mb-0">
         <BT5_2Header></BT5_2Header>
         <BT5_2Body></BT5_2Body> 
        </table>
      </div>
    )
  }
}
