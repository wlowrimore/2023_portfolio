import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import ProjectList from "../../components/projectsList/projectList.component";

import { ButtonContainer, Title } from "./projects.styles";
import Button from "../../components/Button/button.component";

const Projects = ({ id, title, description, image }) => {
  const navigate = useNavigate();

  const goToResumeHandler = () => {
    navigate("resume");
  };

  const githubRedirectHandler = () => {
    window.open("https://www.github.com/wlowrimore");
  };

  return (
    <Fragment>
      <Title>Featured Projects</Title>
      <ProjectList />
      <ButtonContainer>
        <Button
          buttonType={"inverted"}
          onClick={githubRedirectHandler}
          target="_blank"
        >
          More on Github
        </Button>
        <Button buttonType={"base"} onClick={goToResumeHandler}>
          Jump to Resume
        </Button>
      </ButtonContainer>
    </Fragment>
  );
};

export default Projects;
