import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Calculator from "./main/Calculator";
import * as serviceWorker from "./serviceWorker";
import iconCalc from "./assets/IconCalc.png";
import logo from "./assets/logo192.png";
import iconLinkedin from "./assets/iconLinkedin.png";
import iconGitHub from "./assets/iconGitHub.png";

ReactDOM.render(
  <div>
    <h1>Calculadora</h1>
    <div className='divIcons'>
      <img src={iconCalc} className='icon' />
      <a href='https://reactjs.org/' target='_blank'>
        <img src={logo} className='icon' />
      </a>
      <a href='https://github.com/danielLeal98' target='_blank'>
        <img src={iconGitHub} className='icon ' />
      </a>
      <a href='https://www.linkedin.com/in/danielleal98/' target='_blank'>
        <img src={iconLinkedin} className='icon ' />
      </a>
    </div>
    <h3 style={{ fontFamily: "RobotoMono" }}>Desenvolvedor: Daniel Leal</h3>
    <Calculator />
  </div>,
  document.getElementById("root")
);
serviceWorker.unregister();
