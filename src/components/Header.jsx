import { FaSearch, FaFilter } from "react-icons/fa";

const Header = () => {
  return (
    <header className="bg-[#27AAE1] p-4 flex justify-between sm:mb-4">
      <h1 className="text-white text-xl font-bold sm:text-lg">
        Empresa Municipal Aguas de Santa Rosa
      </h1>
      <div className="flex items-center ">
        <div className="flex items-center bg-white p-2 rounded-md shadow-md">
          <FaSearch className="text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Search tickets..."
            className="outline-none w-full"
          />
        </div>
        <button className="ml-2 bg-blue-500 text-white p-2 rounded-md flex items-center">
          <FaFilter className="mr-1" /> Filter
        </button>
      </div>
    </header>
  );
};

export default Header;
