// import { useEffect } from "react";
// import { useLoaderData} from "react-router-dom";
// import { getStoreCraft } from "../../utility/localStorage";

import { useEffect, useState } from "react";
import useAuth from "../../providers/useAuth";
import { key } from "localforage";
import Swal from "sweetalert2";

const MyList = () => {

    const { user } = useAuth() || {};
    const [list, setList] = useState([]);

    console.log(user);
    useEffect(() =>{
        fetch(`http://localhost:5000/crafts/${user?.email}`)
        .then(res => res.json())
        .then(data => {
            setList(data);
        })
    }, [user])

    const handleDelete = _id =>{
        console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/crafts/${_id}`, {
                    method: 'DELETE'
                })
                .then(res => res.json())
                .then(data =>{
                    console.log(data);
                    if(data.deletedCount > 0){
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your art & craft item has been deleted.",
                            icon: "success"
                          }); 
                    }
                })
              
            }
          });
    }
   
    return (
        <div>
          <div className="grid md:grid-cols-3 gap-12">
          {
            list?.map(p => ( 

                <div key={p._id} className="card w-96 glass">
                <figure><img src={p.photo} alt="car!"/></figure>
                <div className="card-body">
                  <h2 className="card-title">Subcategory: {p.name}</h2>
                  <p>{p.price}</p>
                  <p>{p.rating}</p>
                  <p>{p.custom}</p>
                  <p>{p.stock}</p>
                  <div className="card-actions justify-center">
                    <button onClick={() => handleDelete(p._id)} className="btn btn-warning">Delete</button>
                    <button className="btn btn-success">Update</button>
                  </div>
                </div>
              </div>

            ))
           }
          </div>
        </div>
    );
};

export default MyList;
