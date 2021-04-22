import React from 'react';
import CurrencyInput from 'react-currency-masked-input'
import InputMask from "react-input-mask";

export default class NewExpense extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      name: '',
      type: '',
      date: '',
      amount: '0,00'
    };
  }

  handleInput = (element, name, value) => {
    if (value === undefined) {
      value = element.value;
    }
    this.setState({
      [name]: value
    });
  };

  render () {
    return (<div className={'page'}>
        <form id="new-expense-form">
          <div className="input-wrapper">
            <label htmlFor="expense-name">Nome</label>
            <input id="expense-name" value={this.state.name} onChange={e => this.handleInput(e.target, 'name')} type="text"/>
            <div className="error"/>
          </div>
          <div className="input-wrapper">
            <label htmlFor="expense-type">Categoria</label>
            <select id="expense-type" value={this.state.type} onChange={e => this.handleInput(e.target, 'type')}>
              <option>
                Selecionar Categoria
              </option>
            </select>
            <div className="error"/>
          </div>
          <div className="input-wrapper">
            <label htmlFor="expense-date">Data</label>
            <InputMask mask="99/99/9999" maskPlaceholder={'dd/mm/yyyy'} placeholder={'dd/mm/yyyy'} inputMode="numeric" type="text" onChange={e => this.handleInput(e.target, 'date')} value={this.state.date} />
            <div className="error"/>
          </div>
          <div className="input-wrapper amount">
            <label htmlFor="expense-amount">Valor</label>
            <div>
              <span>R$</span>
              <CurrencyInput value={this.state.amount} onChange={(e, value) => this.handleInput(e.target, 'amount', value)} separator={','} maxLength="10" inputMode="numeric" type="text"/>
            </div>
            <div className="error"/>
          </div>
        </form>
      </div>
    );
  }
}
