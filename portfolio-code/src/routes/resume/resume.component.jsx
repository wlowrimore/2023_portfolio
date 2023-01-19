import { Fragment } from "react";
import ResumeText from "../../components/resume-text/resume-text.component";
import { ResumeContainer, ResumeTitle } from "./resume.styles";

const Resume = () => {
  return (
    <Fragment>
      <ResumeTitle>Technical Resume</ResumeTitle>
      <ResumeContainer>
        <ResumeText />
      </ResumeContainer>
    </Fragment>
  );
};

export default Resume;
