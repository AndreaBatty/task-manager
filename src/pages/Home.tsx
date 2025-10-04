import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="">
            <h1 className="text-2xl font-bold text-green-600">Homepage</h1>
            <Link to="/login" className="underline text-base text-blue-600">Vai al login</Link>
        </div>
    )
} 

export default Home;