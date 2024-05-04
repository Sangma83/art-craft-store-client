import { Link, useLoaderData } from "react-router-dom";

const AllCraftItem = () => {
    const loadedAllCraft = useLoaderData();

    return (
        <div className="my-20 overflow-x-auto">
            <table className="table w-full">
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
                    {loadedAllCraft.map(craft =>
                        <tr key={craft._id}>
                            <th></th>
                            <td className="w-1/6">
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
                            <td className="w-1/3">
                                {craft.details}
                                <br/>
                                <span className="badge badge-ghost badge-sm">{craft.user}</span>
                            </td>
                            <td className="w-1/6">{craft.time}<br/>{craft.price}, {craft.rating}</td>
                            <td className="w-1/6">{craft.stock}</td>
                            <td className="w-1/6">
                                <Link to={`/craft/${craft._id}`}><button className="btn btn-outline text-orange-700 btn-xs"> View Details</button></Link>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default AllCraftItem;
