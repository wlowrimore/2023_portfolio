import { Outlet } from "react-router-dom";
import ProfileImgCard from "../../components/profile/profile-image-card.component";

const Home = () => {
  return (
    <div>
      <ProfileImgCard />
      <Outlet />
    </div>
  );
};

export default Home;
