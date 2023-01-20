import {
  courses,
  skills,
  certificates,
} from "../../javascript-content/resume-content";

import {
  City,
  Email,
  Header,
  Phone,
  ResumeTextContainer,
  SectionBody,
  SectionTitle,
  NormalLi,
  ItalicLi,
  Text,
  Ul,
  GridUl,
  CertificateContainer,
  CertificateCard,
} from "./resume-text.styles";

const ResumeText = () => {
  return (
    <ResumeTextContainer>
      <Header>
        <h2>William Lowrimore</h2>
        <City>Nashville, TN</City>
        <Phone>901.568.7941</Phone>
        <Email>wlowrimore@gmail.com</Email>
      </Header>
      <SectionTitle>Objective</SectionTitle>
      <Text>
        As a certified full-stack developer with a passion for front-end
        development, I am currently seeking a web development role that will
        allow me to contribute my skills as well as developing new skills along
        the way.
      </Text>
      <SectionTitle>Education</SectionTitle>
      <SectionBody>
        <Ul>
          Zero to Mastery | Nashville, TN
          <ItalicLi>Complete React Developer | Dec 2022 - Current</ItalicLi>
        </Ul>
        <br />
        <Ul>
          Vanderbilt University Full Stack Coding Bootcamp | Nashville, TN
          <ItalicLi>MERN Stack Certification | May 2022</ItalicLi>
        </Ul>
        <br />
        <Ul>
          Hernando High School | Hernando, MS
          <ItalicLi>Diploma Graduate | May 1995</ItalicLi>
        </Ul>
        <SectionTitle>Relevant Coursework</SectionTitle>
        <GridUl>
          {courses.map((course) => (
            <NormalLi key={course.id}>{course.name}</NormalLi>
          ))}
        </GridUl>
        <SectionTitle>Skills</SectionTitle>
        <GridUl>
          {skills.map((skill) => (
            <NormalLi key={skill.id}>{skill.name}</NormalLi>
          ))}
        </GridUl>
        <SectionTitle>Summary of Contracted Work</SectionTitle>
        <Text>
          I have worked as a Junior Software Developer for a Software
          Engineering Firm where I worked closely with the firm's CTO in an
          Agile Development environment. This position focused on the AARP Ruby
          on Rails platform, as well as a React JS Medical Application for a
          prominent Spinal Surgical Firm.
          <br />I was also commissioned to create a SPA for a well established
          Professional Photographer whose clients include Modern Drummer
          Magazine, Bass Player Magazine, and many more alike.
        </Text>
        <SectionTitle>Certified Achievements</SectionTitle>
        <CertificateContainer>
          {certificates.map((certificate) => (
            <CertificateCard key={certificate.id}>
              <img src={certificate.image} alt={certificate.name} />
              <span>{certificate.name}</span>
            </CertificateCard>
          ))}
        </CertificateContainer>
      </SectionBody>
    </ResumeTextContainer>
  );
};

export default ResumeText;
