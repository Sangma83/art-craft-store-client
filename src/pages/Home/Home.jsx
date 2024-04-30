import HomeBelow from "../HomeBelow/HomeBelow";
import NewsLetter from "../NewsLetter/NewsLetter";
import Footer from "../shared/Footer/Footer";
import Header from "../shared/Header/Header";
import Navbar from "../shared/Navbar/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Header></Header>
      <HomeBelow></HomeBelow>
      <h2 className="text-4xl font-rambla">this is home page</h2>
      <div className="divider divide-orange-900 "></div>
      <NewsLetter></NewsLetter>
      <Footer></Footer>
    </div>
  );
};

export default Home;
