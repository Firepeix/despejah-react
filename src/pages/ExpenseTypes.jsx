import React from 'react';
import ExpenseType from '../components/ExpenseType';
import AlertPrimitive from '../Primitives/AlertPrimitive';

export default class ExpenseTypes extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      types: this.props.expenseTypeService.getExpenseTypes()
    };
  }

  static title (props) {
    return 'Categorias De Despesa';
  }

  updateType = (id, newLimit) => {
    const type = this.state.types.find(type => type.id === id)
    if (type !== undefined) {
      type.limit = newLimit
      this.props.expenseTypeService.updateType(type)
      AlertPrimitive.success('Limite editado com sucesso', () => {
        this.setState({
          types: this.props.expenseTypeService.getExpenseTypes()
        })
      })
    }
  };

  render () {
    return (<div className="page" style={{ marginBottom: '70px' }}>
      <div className="list">
        {this.state.types.map(type =>
          <ExpenseType updateType={(id, limit) => this.updateType(id, limit)}
                       key={type.id} id={type.id} name={type.name} icon={type.icon} limit={type.limit}/>
        )}
      </div>
    </div>);
  }
}
