import React from 'react';
import Header from './section/Header';
import NavBar from './navigation/NavBar';
import Expenses from '../pages/Expenses';

export default class MainLayout extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      page: Expenses,
      mainButton: 'newExpense',
      mainButtonAction: null
    };
  }

  changePage = page => {
    this.setState({ page });
  };

  changeMainButton = (mainButton, mainButtonAction = null) => {
    this.setState({ mainButton, mainButtonAction });
  };

  mainButtonClicked = () => {
    if (this.state.mainButtonAction !== null) {
      this.state.mainButtonAction();
    }
  };

  getPageProps () {
    return {
      expenseTypeService: this.props.expenseTypeService,
      changeMainButton: this.changeMainButton,
      expenseService: this.props.expenseService,
      changePage: this.changePage
    };
  }

  render () {
    const page = React.createElement(this.state.page, this.getPageProps());
    return (
      <div>
        <Header/>
        <main>
          {page}
        </main>
        <NavBar changePage={this.changePage} dispatchMainButtonClicked={this.mainButtonClicked} mainButton={this.state.mainButton}/>
      </div>
    );
  }
}
