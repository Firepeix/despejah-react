import React from 'react';
import Expense from '../components/Expense';

export default class Expenses extends React.Component{


  get expenses () {
    return this.props.expenseService.getExpenses()
  }

  get types () {
    return this.props.expenseTypeService.getExpenseTypes(true)
  }

  render () {
    return (
      <div className="page" style={{marginBottom: '70px'}}>
        <div className="list">
          {this.expenses.map((expense) =>
            <Expense key={expense.id} id={expense.id} name={expense.name} date={expense.date} type={this.types[expense.typeId]} amount={expense.amount}/>
          )}
        </div>
      </div>
    )
  }
}
