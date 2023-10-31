import React, { Component } from 'react'

export default class BT1 extends Component {
  render() {
    let arr = ["HTML","Javascript","Python","C#"]
    return (
      <div>
        <h1> DANH SÁCH KHÓA HỌC</h1>
        <ul>
            {
                arr.map((item,index)=>(
                    <li key={index}>{item}</li>
                ))
            }
        </ul>
      </div>
    )
  }
}
