import React from 'react';
import Header from './section/Header';
import NavBar from './navigation/NavBar';
import Home from '../pages/Home';

class MainLayout extends React.Component {
  _page = Home
  render () {
    const page = React.createElement(this._page)
    return (
      <div>
        <Header />
        <main>
          {page}
        </main>
        <NavBar/>
      </div>
    )
  }
}

export default MainLayout
