import React from 'react';
import Expense from '../components/Expense';
import AlertPrimitive from '../Primitives/AlertPrimitive';
import NewExpense from './NewExpense';

export default class Expenses extends React.Component{
  constructor (props) {
    super(props);
    this.state = {
      expenses: this.props.expenseService.getExpenses()
    }
  }

  static title (props) {
    return 'Despesas'
  }

  get types () {
    return this.props.expenseTypeService.getExpenseTypes(true)
  }

  editExpense = (expense) => {
    this.props.changePage(NewExpense, { savedExpense: expense })
  }

  deleteExpense = (id) => {
    this.props.expenseService.deleteExpense(id)
    AlertPrimitive.success('Despesa deletada com sucesso', () => {
      this.setState({
        expenses: this.props.expenseService.getExpenses()
      })
    })
  }

  render () {
    return (
      <div className="page" style={{marginBottom: '70px'}}>
        <div className="list">
          {this.state.expenses.map((expense) =>
            <Expense handleDeleteExpense={this.deleteExpense} handleEditExpense={this.editExpense}
                     key={expense.id} id={expense.id} name={expense.name} date={expense.date} type={this.types[expense.typeId]} amount={expense.amount}/>
          )}
        </div>
      </div>
    )
  }
}
