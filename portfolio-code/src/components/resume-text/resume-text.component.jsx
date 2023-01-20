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

const courses = [
  {
    id: 1,
    name: "HTML",
  },
  {
    id: 2,
    name: "CSS | SCSS | CSS Frameworks",
  },
  {
    id: 3,
    name: "JavaScript | Ecma Script (latest)",
  },
  {
    id: 4,
    name: "ReactJS",
  },
  {
    id: 5,
    name: "React Native",
  },
  {
    id: 6,
    name: "NextJS",
  },
  {
    id: 7,
    name: "ExpressJS",
  },
  {
    id: 8,
    name: "NodeJS",
  },
  {
    id: 9,
    name: "PostgreSQL",
  },
  {
    id: 10,
    name: "API",
  },
  {
    id: 11,
    name: "Context API",
  },
  {
    id: 12,
    name: "Redux",
  },
  {
    id: 13,
    name: "Styled Components",
  },
  {
    id: 14,
    name: "GraphQL",
  },
  {
    id: 15,
    name: "React Hooks | Custom Hooks",
  },
];

const skills = [
  {
    id: 1,
    name: "Agile Development",
  },
  {
    id: 2,
    name: "Time Management",
  },
  {
    id: 3,
    name: "Critical Thinking",
  },
  {
    id: 4,
    name: "Problem Solving",
  },
  {
    id: 5,
    name: "Customer Service",
  },
];

const certificates = [
  {
    id: 1,
    image: "/certificates/vandy.png",
    name: "Vanderbilt University",
  },
  {
    id: 2,
    image: "/certificates/reactComplete.png",
    name: "React Complete Course",
  },
  {
    id: 3,
    image: "/certificates/reactNative.png",
    name: "React Native",
  },
  {
    id: 4,
    image: "/certificates/agileDevelopment.png",
    name: "Agile Development",
  },
  {
    id: 5,
    image: "/certificates/agileLifeCycle.png",
    name: "Agile Life Cycle",
  },
  {
    id: 6,
    image: "/certificates/rubyOnRails.png",
    name: "Ruby on Rails",
  },
];

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
        I am a certified full-stack developer with a passion for front-end
        development. I am currently seeking a career in front-end development. I
        possess many of the back-end skills that make a front-end developer’s
        role more efficient. I feel as though I am a perfect candidate for this
        front-end software developer position.
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
          I recently worked as Junior Software Developer for Coroutine where I
          was tasked with integrating the OHIF (Open Health Imaging Foundation)
          Image Viewer into a React.JS interface, as well as contributing to an
          AARP Ruby on Rails platform. Currently, I am focusing am working on my
          certification for advanced ReactJS.
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
