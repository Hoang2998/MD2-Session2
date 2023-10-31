import React, { Component } from "react";
import Bt4_1 from "./Bt4_1";
import Bt4_2 from "./Bt4_2";

export default class BT4 extends Component {
  render() {
    return (
      <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col">
              <div className="card">
                <div className="card-body p-4">
                  <div className="row">
                    <Bt4_1></Bt4_1>
                    <Bt4_2></Bt4_2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
