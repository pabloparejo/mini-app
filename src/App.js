import React from 'react';

function App() {
  const [counter, setCounter] = React.useState(0);

  const handleOnClick = () => {
    setCounter(counter + 1);
  };

  return (
    <div className="App">
      <p>
        Click counter:
        {counter}
      </p>
      <button type="button" onClick={handleOnClick}>Click me!</button>
    </div>
  );
}

export default App;
