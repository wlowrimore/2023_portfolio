import { Fragment } from "react";

import {
  ProjectListContainer,
  ProjectListItem,
  Name,
  Description,
} from "./projectList.styles";

const ProjectList = () => {
  const projects = [
    {
      id: 1,
      title: "AARP",
      description: "Enterprise Website",
      image: "/siteImages/aarpSite.png",
    },
    {
      id: 2,
      title: "Expense Tracker",
      description: "React JS Application",
      image: "/siteImages/expenseSite.png",
    },
    {
      id: 3,
      title: "Veternary Scheduler",
      description: "React JS Application",
      image: "/siteImages/vetSite.png",
    },
    {
      id: 4,
      title: "Sayre Joan Photography",
      description: "Enterprise Site",
      image: "/siteImages/sayreJoanSite.png",
    },
    {
      id: 5,
      title: "Weather Dashboard",
      description: "Third Party API",
      image: "/siteImages/weatherDashboard.png",
    },
    {
      id: 6,
      title: "Delish Meals",
      description: "React JS Application",
      image: "/siteImages/foodPicSite.png",
    },
    {
      id: 7,
      title: "Budget Tracker",
      description: "Progressive Web Application",
      image: "/siteImages/budgetSite.png",
    },
    {
      id: 8,
      title: "Code Quiz Application",
      description: "HTML | CSS | JS",
      image: "/siteImages/codeQuiz.png",
    },
  ];

  return (
    <ProjectListContainer>
      {projects.map((project) => (
        <ProjectListItem key={project.id}>
          <Name>{project.title}</Name>
          <img src={project.image} alt={project.title} />
          <Description>{project.description}</Description>
        </ProjectListItem>
      ))}
    </ProjectListContainer>
  );
};

export default ProjectList;
