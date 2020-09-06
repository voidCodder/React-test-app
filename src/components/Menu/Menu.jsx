import './Menu.css';

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';

// statefull
@withRouter
export default class Menu extends Component {
  static propTypes = {
    title: PropTypes.string,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        href: PropTypes.string.isRequired,
      })
    )
  }

  static defaultProps = {
    title: 'Default menu title',
    items: [],
  }

  render() {
    const {title, items, location} = this.props;
    
    return (
      <Fragment>
        <h3>{title}</h3>
        <ul className="menu">
          {items.map((item, idx) => <li className={location.pathname === item.href ? 'active' : ''} key={idx}><Link to={item.href}>{item.title}</Link></li>)}
        </ul>
      </Fragment>
    )
  }
}