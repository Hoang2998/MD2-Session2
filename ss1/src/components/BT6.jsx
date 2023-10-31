import React, { Component } from 'react'
// import  '../BT6.css'
import BT6_1Header from './BT6_1Header'
import BT6_2Mainmenu from './BT6_2Mainmenu'
import BT6_3 from './BT6_3'
import BT6_4 from './BT6_4'
import BT6_5 from './BT6_5'

export default class BT6 extends Component {
  render() {
    return (
        <div>
  <BT6_1Header></BT6_1Header>
  <BT6_2Mainmenu></BT6_2Mainmenu>
  <BT6_3></BT6_3>
  <BT6_4></BT6_4>
  <BT6_5></BT6_5>
</div>
    )
  }
}
