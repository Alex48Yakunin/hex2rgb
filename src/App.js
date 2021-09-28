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

 const update = (e) => {
    const hexValue = e.target.value,
          rgbValue = getRGB(e.target.value);

    setForm({
      input: hexValue.trim(),
      rgb: "",
      fon: null
    });

    if (hexValue.length === 7) {

      if (hexValue.indexOf('#') !== -1 && rgbValue !== '') {
        setForm({
          input: hexValue,
          rgb: rgbValue,
          fon: null
        });
      } else {
        setForm({
          input: hexValue.trim(),
          rgb: "Ошибка!",
          fon: 'red'
        });
      }

    } else if (hexValue.length > 7) {

      setForm({
        input: hexValue.trim(),
        rgb: "Ошибка!",
        fon: 'red'
      });
      
    }
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
