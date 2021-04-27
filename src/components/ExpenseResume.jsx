import React from 'react';
import NumberPrimitive from '../Primitives/NumberPrimitive';
import { car, foodForkDrink, tag } from '../icons/expense-types/expense-type-icons';

export default class ExpenseResume extends React.Component {

  get expenseTypeIcons () {
    return {
      'food-fork-drink': foodForkDrink,
      car: car,
      tag: tag
    };
  }

  render () {
    return (
      <tr className="expense-resume">
        <th>
          <div>
            <img src={this.expenseTypeIcons[this.props.type.icon]} alt={this.props.type.name} className="icon" />
            <div className="name">{this.props.name}</div>
          </div>
        </th>
        <td className="amount">R$ {NumberPrimitive.toReal(this.props.amount)}</td>
      </tr>
    )
  }
}
