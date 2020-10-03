import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  handleOnClick = offset => {
    this.setState(prevState => ({ counter: prevState.counter + offset }));
  }

  render() {
    const { counter } = this.state;
    return (
      <div className="App">
        <p>
          Click counter:
          {counter}
        </p>
        <button type="button" onClick={() => this.handleOnClick(1)}>
          Up!
        </button>
        <button type="button" onClick={() => this.handleOnClick(-1)}>
          Down!
        </button>
      </div>
    );
  }
}

export default App;
