import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/button.component";
import {
  Title,
  SkillsListContainer,
  SkillContainer,
  Name,
  ButtonContainer,
} from "./skills.styles";

const languages = [
  {
    id: 1,
    title: "HTML 5",
    image: "/logos/html5_logo.png",
  },
  {
    id: 2,
    title: "CSS 3",
    image: "/logos/css_logo.png",
  },
  {
    id: 3,
    title: "JavaScript",
    image: "/logos/JS_logo.png",
  },
  {
    id: 4,
    title: "React JS",
    image: "/logos/react_logo.png",
  },
  {
    id: 5,
    title: "TailwindCSS",
    image: "/logos/tailwind_logo.png",
  },
  {
    id: 6,
    title: "PostgreSQL",
    image: "/logos/postgres_logo.png",
  },
  {
    id: 7,
    title: "NEXT JS",
    image: "/logos/nextjs_logo.png",
  },
  {
    id: 8,
    title: "Node JS",
    image: "/logos/nodejs_logo.png",
  },
  {
    id: 9,
    title: "SASS",
    image: "/logos/sass_logo.png",
  },
  {
    id: 10,
    title: "API",
    image: "/logos/rest_logo.png",
  },
  {
    id: 11,
    title: "Bootstrap",
    image: "/logos/bootstrap_logo.png",
  },
  {
    id: 12,
    title: "React Native | Firebase",
    image: "/logos/reactNativeFB.png",
  },
];

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
