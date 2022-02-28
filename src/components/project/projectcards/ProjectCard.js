import { Component } from "react";
import "./ProjectCard.css";

class ProjectCard extends Component {
  render(title, active) {
    return (
      <li className={active ? "projectcard active": "projectcard"}>
        {title}
      </li>
    );
  }
}
export default ProjectCard;