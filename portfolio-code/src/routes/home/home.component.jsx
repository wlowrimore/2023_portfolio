import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import ProfileImgCard from "../../components/profile/profile-image-card.component";
import { ComponentContainer } from "./home.styled";

const Home = () => {
  return (
    <ComponentContainer>
      <ProfileImgCard />
      <Outlet />
    </ComponentContainer>
  );
};

export default Home;
