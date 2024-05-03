import { useEffect, useState } from "react";
import { MdLibraryAdd } from "react-icons/md";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";



const UpdateCraft = () => {
    const { id } = useParams();
    console.log(id);
    const [item, setItem] = useState({});

    useEffect(() =>{
        fetch(`http://localhost:5000/craft/${id}`)
        .then(res => res.json())
        .then(data => {
            setItem(data);
            console.log(data);
        })
    }, [id])
    

    const handleUpdateCraft = (event) => {
        event.preventDefault();

        
        const form = event.target;
        const photo = form.photo.value;
        const name = form.name.value;
        const subcategory = form.subcategory.value;
        const details = form.details.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const custom = form.custom.value;
        const stock = form.stock.value;
        const username = form.username.value;
        const time = form.time.value;
        const craftUpdate = {
          photo,
          name,
          subcategory,
          details,
          price,
          rating,
          custom,
          stock,
          username,
          time,
        };
        console.log(craftUpdate);
        
      
        //add craft
        fetch(`http://localhost:5000/craftUpdate/${id}`, {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(craftUpdate),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.modifiedCount > 0) {
              Swal.fire({
                title: "Success!",
                text: "Craft added successfully",
                icon: "success",
                confirmButtonText: "Cool",
              });
            }
          });
      };


    return (
        <div className="space-y-10">
        <div className="bg-[#F5EEE8] p-24 rounded-lg">
          
      <h2 className="text-3xl font-extrabold text-center mb-4 relative"><MdLibraryAdd className="text-[#e64308d3] ml-80 absolute left-4" /><span className="text-[#e64308d3]">Update</span> Craft Item</h2>
      <form  onSubmit={handleUpdateCraft}>
        {/* form row Image and item name */}
        <div className="md:flex gap-8 mb-6">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Image</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="photo"
                defaultValue={item.photo}
                className="input input-bordered w-full"
                placeholder="Image URL"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Item Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="name"
                defaultValue={item.name}
                className="input input-bordered w-full"
                placeholder="Item name"
              />
            </label>
          </div>
        </div>
        {/* form row subcategory & description */}
        <div className="md:flex gap-8 mb-6">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Subcategory Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="subcategory"
                defaultValue={item.subcategory}
                className="input input-bordered w-full"
                placeholder="Subcategory name"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Short Description</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="details"
                defaultValue={item.details}
                className="input input-bordered w-full"
                placeholder="Short description"
              />
            </label>
          </div>
        </div>
        {/* form row price & rating */}
        <div className="md:flex gap-8 mb-6">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="price"
                defaultValue={item.price}
                className="input input-bordered w-full"
                placeholder="Price"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Rating</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="rating"
                defaultValue={item.rating}
                className="input input-bordered w-full"
                placeholder="Rating"
              />
            </label>
          </div>
        </div>
      

       {/* form row customization & stock status */}
       <div className="md:flex gap-8 mb-6">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Customization</span>
            </label>
            <label className="input-group">
             <select name="custom" defaultValue={item.custom} className="select select-bordered w-full max-w-lg">
           <option value="" disabled></option>
         <option value="Yes">Yes</option>
         <option value="No">No</option>
           </select>
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Stock Status</span>
            </label>
            <label className="input-group">
             <select name="stock" defaultValue={item.stock}  className="select select-bordered w-full max-w-md">
           <option value="" disabled></option>
         <option value="In Stock">In Stock</option>
         <option value="Made to Order">Made to Order</option>
           </select>
            </label>
          </div>
        </div>

        {/* form row User name $ time */}
        <div className="md:flex gap-8 mb-6">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">User Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="username"
                defaultValue={item.username}
                className="input input-bordered w-full"
                placeholder="User name"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Processing Time</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="time"
                defaultValue={item.time}
                className="input input-bordered w-full"
                placeholder="Processing time"
              />
            </label>
          </div>
        </div>
       
        <input
          type="submit"
          value="Update Craft Item"
          className="btn btn-block bg-[#724a27] text-white"
        />
      </form>
    </div>
    
    </div>
    );
};

export default UpdateCraft;