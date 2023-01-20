import { Fragment } from "react";
import { useNavigate } from "react-router-dom";

import { languages } from "../../javascript-content/skills-content";

import Button from "../../components/Button/button.component";
import {
  Title,
  SkillsListContainer,
  SkillContainer,
  Name,
  ButtonContainer,
} from "./skills.styles";

const Skills = () => {
  const navigate = useNavigate();

  const goToResumeHandler = () => {
    navigate("/resume");
  };

  return (
    <Fragment>
      <Title>Skills</Title>
      <SkillsListContainer>
        {languages.map((language) => (
          <SkillContainer key={language.id}>
            <Name>{language.title}</Name>
            <img src={language.image} alt={language.title} />
          </SkillContainer>
        ))}
      </SkillsListContainer>
      <ButtonContainer>
        <Button buttonType={"base"} onClick={goToResumeHandler}>
          Jump to Resume
        </Button>
      </ButtonContainer>
    </Fragment>
  );
};

export default Skills;
