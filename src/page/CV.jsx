import React, { Component } from "react";
import TextBuble from "../components/TextBuble";
class CV extends Component {
  render() {
    return (
      
        <main className="page m-auto position-relative container container-fluid">
          <h1 className="text-center">Mathieu Andriamiraho</h1>
          <TextBuble />
          <div className="boule1 boule"></div>
          <div className="boule2 boule"></div>
          <div className="boule3 boule"></div>
          <div className="boule4 boule"></div>
        </main>
      
    );
  }
}

export default CV;
