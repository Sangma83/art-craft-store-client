// import { useEffect } from "react";
// import { useLoaderData, useParams} from "react-router-dom";


// const MyList = () => {
//     const myList = useLoaderData();
//     const { _id } = useParams();

//     console.log(myList); // Check what data is being received

//     let craft;
//     if (Array.isArray(myList)) {
//         craft = myList.find(craft => craft._id === _id);
//     }

//     console.log(craft);

//     return (
//         <div>
//             <h2>Add Your List: {Array.isArray(myList) ? myList.length : 0}</h2>
//         </div>
//     );
// };


// export default MyList;