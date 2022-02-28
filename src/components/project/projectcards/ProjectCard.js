import { Component } from "react";
import "./ProjectCard.css";

class ProjectCard extends Component {
  render() {
    const setSelected = this.props.setSelected;
    return (
      <li className={this.props.active ? "projectcard active": "projectcard"}
      onClick={() => setSelected(this.props.id)}>
        {this.props.title}
      </li>
    );
  }
}
export default ProjectCard;