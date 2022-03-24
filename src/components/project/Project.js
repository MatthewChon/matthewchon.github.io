import { Component } from "react";
import ProjectCard from "./projectcards/ProjectCard";
import { Portfolio, webPortfolio, coursePortfolio } from "../../data/data";
import "./Project.css";

class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {selected: "featured", data: []};
    this.handleClick = this.handleClick.bind(this);
  }
  updateData() {
    switch (this.state.selected) {
      case "overall":
        this.setState({data: Portfolio});
        break;
      case "web":
        this.setState({data: webPortfolio});
        break;
      case "course":
        this.setState({data: coursePortfolio});
        break;
      default:
        this.setState({data: Portfolio});
    }
  }

  componentDidMount() {
    this.updateData();
  }
  componentDidUpdate(prevProps,prevState) {
    if (this.state.selected !== prevState.selected) {
      this.updateData();
    }
  }
  handleClick(id) {
    this.setState({selected: id});
  }
  render() {
    const list = [
      {
        id: "overall",
        title: "Overall",
      },
      {
        id: "web",
        title: "Web App",
      },
      {
        id: "course",
        title: "Course Projects",
      },
    ];
    return (
      <div className="project" id="project">
        <h1>Project</h1>
        <ul>
          {list.map((item) => (            
            <ProjectCard title={item.title}
            id={item.id}
            key={item.id}
            active={this.state.selected === item.id}
            setSelected={this.handleClick}
            />
            ))}
        </ul>
        <div className="project-container">
          {this.state.data.map((projects) => (
            <div className="item" key={projects.id}
            >
              <a href={projects.url}>
                <img src={projects.img} alt="" />
              </a>
              <h3>{projects.title}</h3>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default Project;