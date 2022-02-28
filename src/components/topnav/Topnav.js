import { Component } from 'react';
import { Link } from 'react-router-dom';
import './Topnav.css';

class TopNav extends Component {
  render() {
    return <nav className="top-nav" ref={this.props.containerRef}>
      <ul className="nav_list">
        <li className="nav_list-item">
          <a href="https://www.linkedin.com/in/matthew-chon-344320177/" className="nav_link">
            LinkedIn
          </a>
        </li>
        <li className="nav_list-item">
          <a href="https://github.com/MatthewChon" className="nav_link">
            GitHub
          </a>
        </li>
      </ul>
    </nav>
  }
}
export default TopNav;