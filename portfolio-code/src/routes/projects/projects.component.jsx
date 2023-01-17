import { Fragment } from "react";
import ProjectList from "../../components/projectsList/projectList.component";

import { Title } from "./projects.styles";

const Projects = ({ id, title, description, image }) => {
  return (
    <Fragment>
      <Title>Projects</Title>
      <ProjectList />
    </Fragment>
  );
};

export default Projects;
