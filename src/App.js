import React from 'react';

function App() {
  const [text, setTextState] = React.useState('Once you write something, this will disapear');
  const handleOnChange = event => {
    setTextState(event.target.value);
  };
  return (
    <div className="App">
      <input type="text" onChange={handleOnChange} placeholder="write something" />
      <p>{ text }</p>
    </div>
  );
}

export default App;
