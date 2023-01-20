import ResumeText from "../../components/resume-text/resume-text.component";
import { ResumeContainer, ResumeTitle, RootContainer } from "./resume.styles";

const Resume = () => {
  return (
    <RootContainer>
      <ResumeTitle>Technical Resume</ResumeTitle>
      <ResumeContainer>
        <ResumeText />
      </ResumeContainer>
    </RootContainer>
  );
};

export default Resume;
