import { useLoaderData } from "react-router-dom";
import HomeBelow from "../HomeBelow/HomeBelow";
import NewsLetter from "../NewsLetter/NewsLetter";
import Header from "../shared/Header/Header";
import CraftCard from "../CraftCard/CraftCard";

const Home = () => {
  const crafts = useLoaderData();

  return (
    <div>
      
      <Header></Header>
      <HomeBelow></HomeBelow>
      <h2 className="text-4xl font-rambla">this is home page</h2>
      <h2 className="text-5xl font-rambla text-center mt-8">CRAFT ITEMS</h2>
     <div className="grid md:grid-cols-3 gap-4 my-11">
     {
        crafts.slice(0, 6).map(craft => <CraftCard
        key={craft._id}
        craft={craft}
        ></CraftCard>)
      }
     </div>
      <div className="divider divide-orange-900 "></div>
      <NewsLetter></NewsLetter>
     
    </div>
  );
};

export default Home;
