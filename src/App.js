import React from 'react';

class App extends React.Component{
  state = {
    counter: 0
  }

  handleOnClick = () => {
    this.setState(prevState => ({ counter: prevState.counter + 1 }))
  }

  render() {
    const { counter } = this.state;
    return (
      <div className="App">
        <p>Click counter: {counter}</p>
        <button onClick={this.handleOnClick}>Click me!</button>
      </div>
    );
  }
}

export default App;
