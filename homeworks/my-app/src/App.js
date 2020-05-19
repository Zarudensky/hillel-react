import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';

export default class App extends Component {
  render() {
    const name = "Stas";
    return (
      <div className="main__container">
        <p className="title">Hellow world!</p>
        <img src={logo} className="react__logo" alt="logo" />
        <p className="descr">My name is {name}</p>
        <p className="descr">This is my first React app.</p>
      </div>
    )
  }
}