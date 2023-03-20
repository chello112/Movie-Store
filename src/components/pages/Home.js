import HomeCard from "./home/HomeCard";
import homeCardImage from "../../assets/movie.jpg";

const Home = () => {
  return (
    <div>
      <div className="cards__wrapper">
          <HomeCard
            src={homeCardImage}
          />
      </div>
    </div>
  );
};

export default Home;
