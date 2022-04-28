import React, { Component } from "react";
import BoxClass from "./component/BoxClass";

export default class AppClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter2: 0,
      value: 0,
    };
    console.log("constructor");
  }

  increase = () => {
    this.setState({
      counter2: this.state.counter2 + 1,
      value: this.state.value + 1,
    });
    console.log("increase function", this.state);
  };

  componentDidMount() {
    // api 콜
    // render이후에 해주는 이유? 만들어진 UI에 데이터를 끼워맞춰주기 위해
    console.log("componentDidMount");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate", this.state);
  }

  render() {
    console.log("render");
    return (
      <div>
        <div>state:{this.state.counter2}</div>
        <button onClick={this.increase}>클릭!</button>
        {this.state.counter2 < 3 && <BoxClass num={this.state.value} />}
      </div>
    );
  }
}
