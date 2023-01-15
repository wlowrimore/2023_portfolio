import { Outlet } from "react-router-dom";
import ProfileImgCard from "../../components/profile/profile-image-card.component";

const Home = () => {
  return (
    <div>
      <ProfileImgCard />
      <h1>This is the about section!</h1>
      <Outlet />
    </div>
  );
};

export default Home;
