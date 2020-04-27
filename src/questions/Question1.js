import React from "react";
import Header from "../Header";
import "../App.css";

// Question1-1: useStateを使って、クラスコンポーネントから関数コンポーネントへ書き換え
class Question1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  render() {
    return (
      <>
        <Header />
        <p>You clicked {this.state.count} times</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click me
        </button>
      </>
    );
  }
}

export default Question1;
