import { useNavigate } from "react-router-dom";
import ProjectList from "../../components/projectsList/projectList.component";

import { ButtonContainer, RootContainer, Title } from "./projects.styles";
import Button from "../../components/Button/button.component";

const Projects = ({ id, title, description, image }) => {
  const navigate = useNavigate();

  const goToResumeHandler = () => {
    navigate("/resume");
  };

  const githubRedirectHandler = () => {
    window.open("https://www.github.com/wlowrimore");
  };

  return (
    <RootContainer>
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
    </RootContainer>
  );
};

export default Projects;
