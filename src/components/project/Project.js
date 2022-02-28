import { Component } from "react";
import ProjectCard from "./projectcards/ProjectCard";
import { featuredPortfolio, webPortfolio, mobilePortfolio, designPortfolio, contentPortfolio } from "../../data/data";
import "./Project.css";

class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {selected: "featured", data: []};
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    switch (this.state.selected) {
      case "featured":
        this.setState({data: featuredPortfolio});
        break;
      case "web":
        this.setState({data: webPortfolio});
        break;
      case "mobile":
        this.setState({data: mobilePortfolio});
        break;
      case "design":
        this.setState({data: designPortfolio});
        break;
      case "content":
        this.setState({data: contentPortfolio});
        break;
      default:
        this.setState({data: featuredPortfolio});
    }
  }
  handleClick(id) {
    this.setState({selected: id});
  }
  render() {
    const list = [
      {
        id: "featured",
        title: "Featured",
      },
      {
        id: "web",
        title: "Web App",
      },
      {
        id: "mobile",
        title: "Mobile App",
      },
      {
        id: "design",
        title: "Design",
      },
      {
        id: "content",
        title: "Content",
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
              <img src={projects.img} alt="" />
              <h3>{projects.title}</h3>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default Project;