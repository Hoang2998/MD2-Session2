import React, { Component } from 'react'

export default class BT5_2Header extends Component {
  render() {
    return (
        <thead>
        <tr>
          <th
            scope="col"
            className="border-0 text-uppercase font-medium pl-4"
          />
          <th scope="col" className="border-0 text-uppercase font-medium">
            Name
          </th>
          <th scope="col" className="border-0 text-uppercase font-medium">
            Age
          </th>
          <th scope="col" className="border-0 text-uppercase font-medium">
            Email
          </th>
          <th scope="col" className="border-0 text-uppercase font-medium">
            Dateofbirth
          </th>
          <th scope="col" className="border-0 text-uppercase font-medium">
            Manage
          </th>
          <th scope="col" className="border-0 text-uppercase font-medium">
            Action
          </th>
        </tr>
      </thead>
    )
  }
}
