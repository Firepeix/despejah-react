import './NavButton.css'
import React from 'react';
import Ripples from 'react-ripples'

export default class NavButton extends React.Component {

  get buttonClass () {
    let defaultClass = 'nav-button'
    if (this.props.main) {
      defaultClass += ' main'
    }
    return defaultClass
  }

  get isActive () {
    return this.props.active !== undefined ? this.props.active : true
  }

  render () {
    if (this.isActive) {
      return (
        <Ripples onClick={this.props.onClick} className={this.buttonClass} color={'rgba(255, 255, 255, 0.3)'}>
          <img src={this.props.icon} alt={this.props.title} className="icon"/>
          <span className="title">{this.props.title}</span>
        </Ripples>
      );
    }

    return ''
  }
}
