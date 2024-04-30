import HomeBelow from "../HomeBelow/HomeBelow";
import Header from "../shared/Header/Header";
import Navbar from "../shared/Navbar/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Header></Header>
      <HomeBelow></HomeBelow>
      <h2 className="text-4xl font-rambla">this is home page</h2>
    </div>
  );
};

export default Home;
