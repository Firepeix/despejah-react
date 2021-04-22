import React from 'react';
import Header from './section/Header';
import NavBar from './navigation/NavBar';
import NewExpense from '../pages/NewExpense';

class MainLayout extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      page: NewExpense
    }
  }

  changePage = page => {
    this.setState({ page })
  }

  render () {
    const page = React.createElement(this.state.page)
    return (
      <div>
        <Header />
        <main>
          {page}
        </main>
        <NavBar changePage={this.changePage}/>
      </div>
    )
  }
}

export default MainLayout
