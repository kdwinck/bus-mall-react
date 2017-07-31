import React, {Component} from 'react'

import './navbar.scss'

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <h1> Busmall React </h1>
        <div className="links">
          <a href="">Home</a>
          <a href="">Services</a>
          <a href="">About</a>
          <a href="">Contact</a>
        </div>
      </div>
    )
  }
}

export default Navbar
