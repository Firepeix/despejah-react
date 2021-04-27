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

  /**
   * Muda o botão principal da aplicação com base no evento
   * @param mainButton
   * @param mainButtonAction
   */
  changeMainButton = (mainButton, mainButtonAction = null) => {
    this.setState({ mainButton, mainButtonAction });
  };

  /**
   * Emite evento que o botão principal foi clicado
   */
  mainButtonClicked = () => {
    if (this.state.mainButtonAction !== null) {
      this.state.mainButtonAction();
    }
  };

  /**
   * Muda de paginas e adiciona as props dinamicas com base na payload do evento
   * @param page
   * @param props
   */
  changePage = (page, props = null) => {
    this._dynamicPageProps = props === null ? {} : props
    this.setState({ page });
  };

  /**
   * Retorna um junção das propriedades padrão de das propriedades dinamicas
   * @return {{}}
   */
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
