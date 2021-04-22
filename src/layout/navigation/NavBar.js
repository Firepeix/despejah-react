import React from 'react';
import './NavBar.css';
import { home, plus, list, checkBold } from '../../../src/icons/icons';
import NavButton from '../interaction/buttons/NavButton';
import Home from '../../pages/Home';
import Expenses from '../../pages/Expenses';
import NewExpense from '../../pages/NewExpense';

export default class NavBar extends React.Component {
  changePages = (page) => {
    this.props.changePage(page)
  }

  render () {
    return (
      <footer>
        <NavButton onClick={() => this.changePages(Home)} icon={home} title={'Home'}/>
        <NavButton onClick={() => this.changePages(NewExpense)} icon={plus} main={true} title={'Despesa'} />
        <NavButton icon={checkBold} main={true} active={false} title={'Salvar'} />
        <NavButton onClick={() => this.changePages(Expenses)} icon={list} title={'Lista'} />
      </footer>
    );
  }
}
