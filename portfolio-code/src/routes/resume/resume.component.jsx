import ResumeText from "../../components/resume-text/resume-text.component";
import {
  ResumeContainer,
  ResumeTitle,
  RootContainer,
  PrintableResumeLink,
} from "./resume.styles";
import PrintableResume from "../../assets/printable-resume/01-23_frontEndReact.pdf";

const Resume = () => {
  return (
    <RootContainer>
      <ResumeTitle>
        Technical Resume
        <PrintableResumeLink>
          <a href={PrintableResume} target="_blank" rel="noreferrer">
            View Printable Version
          </a>
        </PrintableResumeLink>
      </ResumeTitle>
      <ResumeContainer>
        <ResumeText />
      </ResumeContainer>
    </RootContainer>
  );
};

export default Resume;
