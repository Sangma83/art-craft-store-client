import { Link } from "react-router-dom";
import notFound from "../../assets/404.gif";


const ErrorPage = () => {
    return (
        <div className="text-3xl text-center">
            <img className="w-1/2 mx-auto items-center " src={notFound} alt="" />
            <h2 className="font-bold text-green-900 text-5xl">Ohooo!!! 404 route</h2>
            <p className="text-3xl font-bold mt-6">Not found page!!!</p>
            <Link className="text-red-300" to="/"><button className="btn px-24 bg-green-600 text-white mt-6 mb-20">Home Page</button></Link>
        </div>
    );
};

export default ErrorPage;