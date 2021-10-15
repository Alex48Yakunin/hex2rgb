import './App.css';
import React, { useState } from 'react';

function ColorConverter(){

  const [form, setForm] = useState({
    input: '#9921ff',
    rgb: 'rgb(153, 33,  255)',
    fon: null
  });

  const getRGB = (hex) => {
    const r = parseInt(hex.slice(1, 3), 16),
          g = parseInt(hex.slice(3, 5), 16),
          b = parseInt(hex.slice(5, 7), 16);

    return `rgb(${r}, ${g}, ${b})`;
  }


const validateHex = (value) => {
  if(value.length === 7 && isNaN(value) !== false){
    if(value[0] === '#') {
      setForm({
        input: value.trim(),
        rgb: getRGB(value),
        fon: null
      });
    } else {
      setForm({
        rgb: "Ошибка!",
        fon: 'red'
      });
    }
  } else {
    setForm({
      rgb: "Ошибка!",
      fon: 'red'
    });
  }
}

 const update = (e) => {
    const hexValue = e.target.value;

    setForm({
      input: hexValue.trim(),
      rgb: "",
      fon: null
    });

    validateHex(hexValue);
  };



  return (
    <div className="container">
        <form className="form" style={{backgroundColor: form.fon ? form.fon : form.rgb }}>
            <input className="form__item form__item_hex" onChange={update} value={form.input}></input>
            <div className="form__item form__item_rgb">{form.rgb}</div>
        </form>
    </div>
  )
}




function App() {
  return (
    <div className="App">
        <ColorConverter />
    </div>
  );
}

export default App;
