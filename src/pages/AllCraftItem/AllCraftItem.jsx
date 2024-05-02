import { Link, useLoaderData } from "react-router-dom";


const AllCraftItem = () => {
    const loadedAllCraft = useLoaderData();

    // const {_id} = craft;

    return (
        <div className="my-20">
            
           <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th className="text-xl text-orange-800">Photo</th>
        <th className="text-xl text-orange-800">Details</th>
        <th className="text-xl text-orange-800">Time</th>
        <th className="text-xl text-orange-800">Stock</th>
        <th className="text-xl text-orange-800">Action</th>
      </tr>
    </thead>
    <tbody>
      {
        loadedAllCraft.map(craft =>
        
            <tr key={craft._id}>
            <th>
              <label>
                
              </label>
            </th>
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={craft.photo} alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
                <div>
                  <div className="font-bold">{craft.name}</div>
                  <div className="text-sm opacity-50">{craft.subcategory}</div>
                </div>
              </div>
            </td>
            <td>
              {craft.details}
              <br/>
              <span className="badge badge-ghost badge-sm">{craft.user}</span>
            </td>
            <td>{craft.time}</td>
            <td>{craft.stock}</td>
            <th>
              <Link to={`/craft/${craft._id}`}><button className="btn btn-outline text-orange-700 btn-xs"> View Details</button></Link>
            </th>
          </tr>

        )
      }
      
    </tbody>    
  </table>
</div>
        </div>
    );
};

export default AllCraftItem;