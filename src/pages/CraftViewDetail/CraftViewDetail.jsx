import { GiVibratingShield } from "react-icons/gi";
import { IoMdPerson } from "react-icons/io";
import { IoTimer } from "react-icons/io5";
import { LuBadgeDollarSign } from "react-icons/lu";
import { MdOutlineDashboardCustomize, MdOutlineMailOutline } from "react-icons/md";
import { useLoaderData, useParams } from "react-router-dom";


const CraftViewDetail = () => {
    const crafts = useLoaderData();
    const { id } = useParams();
    const craft = crafts.find(craft => craft._id === id)
    console.log(craft);

    

      
    return (
        <div className=" mt-12 mb-20 text-xl">
            
            <div className="grid md:grid-cols-4 gap-4">
                <div className="md:col-span-3">
                    <img className="rounded-lg" src={craft.photo} alt="" />
                </div>
                 <div className="space-y-6">
                    <h2 className="font-bold text-orange-800 text-xl mb-6">{craft.subcategory} | {craft.name}</h2>
                    <p>{craft.details}</p>

                    <div className="">
          <div className="indicator-item indicator-bottom flex items-center ">
            
              <button className="btn btn-square bg-green-700 text-white px-8 skeleton ml-5">{craft.stock}</button>
          </div> 
          </div>


          
          <p className="flex items-center gap-2"><IoMdPerson className="text-orange-800" />By: {craft.user}</p>
          <p className="flex items-center gap-2"><IoTimer className="text-orange-800" />Time: {craft.time}</p>
          <p className="flex items-center gap-2"><MdOutlineMailOutline className="text-orange-800" />Email: {craft.email}</p>
         
          <p className="flex items-center gap-2"><LuBadgeDollarSign className="text-orange-800" />Price: {craft.price}</p>
          <p className="flex items-center gap-2"><GiVibratingShield className="text-orange-800" />Rate: {craft.rating}</p>   
         
         
        <div className="flex items-center gap-2"><MdOutlineDashboardCustomize className="text-orange-800" />Customization: {craft.custom}</div>
          <div className="card-actions">
           <button className="btn bg-orange-800 text-white w-1/3 ml-6">Buy</button>
          </div>
        </div>
                 </div>
            </div>
       
    );
};

export default CraftViewDetail;