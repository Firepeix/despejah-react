import React from 'react';
import Header from './section/Header';
import NavBar from './navigation/NavBar';
import Home from '../pages/Home';

export default class MainLayout extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      page: Home,
      mainButton: 'newExpense',
      mainButtonAction: null
    };
    this._pageProps = {
      expenseTypeService: this.props.expenseTypeService,
      changeMainButton: this.changeMainButton,
      expenseService: this.props.expenseService,
      changePage: this.changePage
    }
    this._dynamicPageProps = {}
  }

  changeMainButton = (mainButton, mainButtonAction = null) => {
    this.setState({ mainButton, mainButtonAction });
  };

  mainButtonClicked = () => {
    if (this.state.mainButtonAction !== null) {
      this.state.mainButtonAction();
    }
  };

  changePage = (page, props = null) => {
    this._dynamicPageProps = props === null ? {} : props
    this.setState({ page });
  };

  get pageProps () {
    return {...this._pageProps, ...this._dynamicPageProps}
  }


  render () {
    const page = React.createElement(this.state.page, this.pageProps);
    return (
      <div>
        <Header title={this.state.page.title(page.props)}/>
        <main>
          {page}
        </main>
        <NavBar changePage={this.changePage} dispatchMainButtonClicked={this.mainButtonClicked} mainButton={this.state.mainButton}/>
      </div>
    );
  }
}
