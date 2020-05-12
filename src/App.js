import React, { useState } from 'react';

function App() {
  //default color
  const [backg, setBackg] = useState('#FDEBD0');

  const changeColor = () => {
    //function to change color
    let colorCode = '#' + Math.floor(Math.random() * 16777215).toString(16);
    return colorCode;
  };
  const newValue = () => {
    setBackg(changeColor());
  };

  const mystyle = {
    //css button
    color: '#EC7063',
    backgroundColor: { backg },
    padding: '30px',
    textAlign: 'center',
    fontFamily: 'Courier',
  };

  const stylebutton = {
    //css button
    color: '#EBE8EC',
    backgroundColor: '#EC7063',
    borderRadius: '5px',
    padding: '15px',
    margin: '200px 650px',
    fontFamily: 'Courier',
  };
  const stylefooter = {
    //css footer
    //textAlign: 'center',
    backgroundColor: '#EC7063',
    color: 'white',
    position: 'absolute',
    bottom: '0',
    width: '100%',
    height: '2.5rem',
    textAlign: 'center',
    fontFamily: 'Courier',
  };
  //where the magic happens
  return (
    <div style={{ backgroundColor: backg }}>
      <h1 style={mystyle}>Random Color Generator</h1>
      <button style={stylebutton} onClick={newValue}>
        Change my background
      </button>
      <footer style={stylefooter}>Made by Gaby Sánchez</footer>
    </div>
  );
}

export default App;
