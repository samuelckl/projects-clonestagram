import { Link } from "react-router-dom";

function Tab(){
    return(<div className="w-56 text-white rounded-xl bg-gray-950 flex flex-col items-center py-6 px-4">
        <Link to="/" className="px-12 py-2 hover:text-gray-300 hover:bg-gray-900 text-lg">Home</Link>
        <Link to="/about" className="px-12 py-2 hover:text-gray-300 hover:bg-gray-900 text-lg">About</Link>
      </div>)
}

export default Tab;