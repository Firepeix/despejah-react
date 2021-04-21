import React from 'react';
import './NavBar.css';
import { home, plus, list, checkBold } from '../../../src/icons/icons';

class NavBar extends React.Component {
  render () {
    return (
      <footer>
        <div>
          <img src={home} alt="Home" className="icon"/>
          <span className="title">Home</span>
        </div>
        <div className="main active ripple" id="main-button">
          <img src={plus} alt="Home" className="icon"/>
          <span className="title">Despesa</span>
        </div>
        <div className="main" id="submit-expense">
          <img src={checkBold} alt="Home" className="icon"/>
          <span className="title">Salvar</span>
        </div>
        <div>
          <img src={list} alt="Home" className="icon"/>
          <span className="title">Lista</span>
        </div>
      </footer>
    );
  }
}

export default NavBar;
