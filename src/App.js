import React from 'react';
import './App.css';
import MainLayout from './layout/MainLayout.jsx';
import ExpenseTypeService from './services/ExpenseTypeService';
import ExpenseService from './services/ExpenseService';

export default class App extends React.Component{
  constructor (props) {
    super(props);
    this.expenseServiceType = new ExpenseTypeService()
    this.expenseService = new ExpenseService()
  }

  render() {
    return (
      <div className="App">
        <MainLayout expenseService={this.expenseService} expenseTypeService={this.expenseServiceType} />
      </div>
    );
  }
};
