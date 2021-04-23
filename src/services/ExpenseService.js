import DatabaseService from './DatabaseService';
import NumberPrimitive from '../Primitives/NumberPrimitive';
import DatePrimitive from '../Primitives/DatePrimitive';

export default class ExpenseService {
  constructor () {
    this.databaseService = new DatabaseService()
  }

  getExpenses () {
    return this.databaseService.getModels('expenses').reverse();
  }

  /**
   * Função que busca as 3 maiores despesas salvas
   */
  getThreeBiggestExpenses (expenses = null) {
    let sortedExpenses = expenses === null ? this.databaseService.getModels('expenses') : expenses
    sortedExpenses = sortedExpenses.sort((expenseA, expenseB) => expenseA.amount > expenseB.amount ? -1 : 1)
    return sortedExpenses.slice(0, 3)
  }

  /**
   * Função que salva uma despesa no localStorage
   */
  saveExpense (expense) {
    if (this.databaseService.exists(expense)) {
      this.databaseService.updateModel(expense, 'expenses')
      return;
    }

    this.databaseService.insertModel(expense, 'expenses');
  }

  /**
   * Função que cria uma entidade de despesa
   */
  makeExpense (id = null, name, typeId, date, amount) {
    amount = isNaN(amount) ? NumberPrimitive.toInt(amount) : amount;
    date = date.match(/\d{4}-\d{2}-\d{2}/) ? date : DatePrimitive.toISODateString(date);
    return { id: id, name: name, typeId: typeId, date: date, amount: amount };
  }
}
