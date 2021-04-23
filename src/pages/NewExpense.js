import React from 'react';
import CurrencyInput from 'react-currency-masked-input';
import InputMask from "react-input-mask";
import DatePrimitive from '../Primitives/DatePrimitive';
import NumberPrimitive from '../Primitives/NumberPrimitive';
import Home from './Home';
import AlertPrimitive from '../Primitives/AlertPrimitive';

export default class NewExpense extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      name: '',
      type: '',
      date: '',
      amount: '0,00',
      errors: {
        name: null,
        type: null,
        date: null,
        amount: null
      }
    };
  }

  get savedExpenseId () {
    return null
  }

  handleInput = (element, name, value) => {
    if (value === undefined) {
      value = element.value;
    }
    this.setState({
      [name]: value
    });
  };

  componentDidMount () {
    this.props.changeMainButton('saveExpense', this.saveExpense);
  }

  saveExpense = () => {
    if (this.validate()) {
      const expense = this.props.expenseService.makeExpense(this.savedExpenseId, this.state.name, this.state.type, this.state.date, this.state.amount);
      this.props.expenseService.saveExpense(expense);
      AlertPrimitive.success('Despesa salva com sucesso!', () => this.props.changePage(Home));
    }
  };

  validate () {
    const { errors } = this.state;
    this.cleanValidation();
    const rules = this.getValidationRules();
    Object.keys(this.state).forEach(name => {
      if (rules[name] !== undefined) {
        errors[name] = rules[name]();
      }
    });
    this.setState({ errors });
    return Object.values(errors).filter(error => error !== null).length < 1;
  }

  getValidationRules () {
    return {
      name: this.validateName,
      type: this.validateType,
      date: this.validateDate,
      amount: this.validateAmount
    };
  }

  validateName = () => {
    if (this.state.name === '') {
      return 'Por favor preencha o nome da despesa!';
    }

    return null;
  };

  validateType = () => {
    if (isNaN(this.state.type) || this.state.type === '') {
      return 'Por favor selecione uma categoria!';
    }

    return null;
  };

  validateDate = () => {
    if (this.state.date !== '') {
      const inputDate = new Date(DatePrimitive.toISODateString(this.state.date) + ' 00:00:00');
      if (!DatePrimitive.isValid(inputDate)) {
        return 'Por favor preencha com uma data valida';
      }

      if (inputDate > new Date()) {
        return 'Por favor preencha com uma data no passado';
      }
      return null;
    }

    return 'Por favor preencha a data que a despesa ocorreu!';
  };

  validateAmount = () => {
    if (NumberPrimitive.toInt(this.state.amount) < 1) {
      return 'A despesa deve ter o valor maior que 0!';
    }

    return null;
  };

  cleanValidation () {
    this.setState({
      errors: {
        name: null,
        type: null,
        date: null,
        amount: null
      }
    });
  }

  componentWillUnmount () {
    this.props.changeMainButton('newExpense');
  }

  render () {
    return (<div className={'page'}>
        <form id="new-expense-form">
          <div className="input-wrapper">
            <label htmlFor="expense-name">Nome</label>
            <input id="expense-name" value={this.state.name} onChange={e => this.handleInput(e.target, 'name')} type="text"/>
            {this.state.errors.name !== null ? (
              <div className="error">{this.state.errors.name}</div>
            ) : ''}
          </div>
          <div className="input-wrapper">
            <label htmlFor="expense-type">Categoria</label>
            <select id="expense-type" value={this.state.type} onChange={e => this.handleInput(e.target, 'type')}>
              <option>
                Selecionar Categoria
              </option>
              {this.props.expenseTypeService.getExpenseTypes().map((type) =>
                <option key={type.id} value={type.id}>{type.name}</option>
              )}
            </select>
            {this.state.errors.type !== null ? (
              <div className="error">{this.state.errors.type}</div>
            ) : ''}
          </div>
          <div className="input-wrapper">
            <label htmlFor="expense-date">Data</label>
            <InputMask mask="99/99/9999" maskPlaceholder={'dd/mm/yyyy'} placeholder={'dd/mm/yyyy'} inputMode="numeric" type="text" onChange={e => this.handleInput(e.target, 'date')} value={this.state.date}/>
            {this.state.errors.date !== null ? (
              <div className="error">{this.state.errors.date}</div>
            ) : ''}
          </div>
          <div className="input-wrapper amount">
            <label htmlFor="expense-amount">Valor</label>
            <div>
              <span>R$</span>
              <CurrencyInput value={this.state.amount} onChange={(e, value) => this.handleInput(e.target, 'amount', value)} separator={','} maxLength="10" inputMode="numeric" type="text"/>
            </div>
            {this.state.errors.amount !== null ? (
              <div className="error">{this.state.errors.amount}</div>
            ) : ''}
          </div>
        </form>
      </div>
    );
  }
}
