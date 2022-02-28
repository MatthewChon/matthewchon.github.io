import { Component } from 'react';
import { Link } from 'react-router-dom';

class TopNav extends Component {
  render() {
    return <nav className="top-nav" ref={this.props.containerRef}>
      <ul className="nav_list">
        <li className="nav_list-item">
          <Link to="/" className="nav_link">
            About
          </Link>
        </li>
        <li className="nav_list-item">
          <Link to="/" className="nav_link">
            GitHub
          </Link>
        </li>
        <li className="nav_list-item">
          <Link to="/" className="nav_link">
            Resume
          </Link>
        </li>
      </ul>
    </nav>
  }
}
export default TopNav;