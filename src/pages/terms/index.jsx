const { Component } = require("react");

// C                   C++/Java/C#/Python/JS   Lisp/JS/Rust           Go/Rust
// 面向过程(function)  -> 面向对象(class)     ->  函数式编程(function) -> 组合大于继承

class Terms extends Component {
  state = {
    num: 0,
  };
  addNum = () => {
    this.setState({
      num: this.state.num + 1,
    });
  };
  componentDidMount() {
    console.log("componentDidMount");
  }
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
  render() {
    console.log("render");
    return (
      <div>
        <div>num: {this.state.num}</div>
        <button onClick={this.addNum}>add num</button>
      </div>
    );
  }
}

export default Terms;
