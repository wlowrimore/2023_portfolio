import { projects } from "../../javascript-content/projects-content";

import {
  ProjectListContainer,
  ProjectListItem,
  Name,
  Description,
  RootContainer,
} from "./projectList.styles";

const ProjectList = () => {
  return (
    <RootContainer>
      <ProjectListContainer>
        {projects.map((project) => (
          <ProjectListItem key={project.id}>
            <Name>{project.title}</Name>
            <img src={project.image} alt={project.title} />
            <span onClick={() => window.open(project.repoUrl)}>
              see the code
            </span>
            <Description>{project.description}</Description>
          </ProjectListItem>
        ))}
      </ProjectListContainer>
    </RootContainer>
  );
};

export default ProjectList;
