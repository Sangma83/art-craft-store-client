import { useLoaderData } from "react-router-dom";
import HomeBelow from "../HomeBelow/HomeBelow";
import NewsLetter from "../NewsLetter/NewsLetter";
import Footer from "../shared/Footer/Footer";
import Header from "../shared/Header/Header";
import Navbar from "../shared/Navbar/Navbar";
import CraftCard from "../CraftCard/CraftCard";

const Home = () => {
  const crafts = useLoaderData();

  return (
    <div>
      <Navbar></Navbar>
      <Header></Header>
      <HomeBelow></HomeBelow>
      <h2 className="text-4xl font-rambla">this is home page</h2>
      <h2 className="text-4xl font-rambla">Craft list: {crafts.length}</h2>
     <div className="grid md:grid-cols-2 gap-4">
     {
        crafts.map(craft => <CraftCard
        key={craft._id}
        craft={craft}
        ></CraftCard>)
      }
     </div>
      <div className="divider divide-orange-900 "></div>
      <NewsLetter></NewsLetter>
      <Footer></Footer>
    </div>
  );
};

export default Home;
