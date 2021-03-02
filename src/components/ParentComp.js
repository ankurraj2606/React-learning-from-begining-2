import React, { Component } from "react";
import MemoComp from "./MemoComp";
//import PureComponents from "./PureComponents";
//import RegularComp from "./RegularComp";

class ParentComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Ankur",
    };
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "Ankur",
      });
    }, 2000);
  }
  render() {
    console.log("****************Parent Component Reander****************");
    return (
      <div>
        ParentComponent
        {/* <RegularComp name={this.state.name} />
        <PureComponents name={this.state.name} /> */}
        <MemoComp />
      </div>
    );
  }
}

export default ParentComp;
