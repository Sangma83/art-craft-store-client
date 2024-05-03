import { GiVibratingShield } from "react-icons/gi";
import { IoMdPerson } from "react-icons/io";
import { LuBadgeDollarSign } from "react-icons/lu";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { Link } from "react-router-dom";



const CraftCard = ({craft}) => {

    const {_id, photo,name,subcategory,details,price,rating,custom,stock,username,time} = craft;
    

    return (
        <div className="card w-full bg-base-100 shadow-xl">
        <figure className="px-10 pt-10  flex-grow">
          <img src={photo} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className=" relative">
          <div className="indicator-item indicator-bottom ml-64 absolute bottom-0 left-8">
              <button className="btn btn-square bg-green-700 text-white px-4 skeleton">{stock}</button>
          </div> 
          </div>
        <div className="card-body">
          <h2 className="card-title">{subcategory} | {name}</h2>
          <p>{details}</p>
          <p className="flex items-center gap-2"><IoMdPerson className="text-orange-800" />by:{username} {time}</p>
          <div className="flex justify-between" >
          <p className="flex items-center gap-2"><LuBadgeDollarSign className="text-orange-800" /> {price}</p>
          <p className="flex items-center gap-2 ml-28"><GiVibratingShield className="text-orange-800" /> {rating}</p>   
          </div>
          Customize:
        <div className="badge badge-ghost w-1/5 gap-2"><MdOutlineDashboardCustomize className="text-orange-800" />{custom}</div>
          <div className="card-actions">
           <Link to={`/craft/${_id}`}> <button className="btn bg-orange-800 text-white">View Details</button> </Link>
          </div>
        </div>
        
      </div>
    );
};

export default CraftCard;