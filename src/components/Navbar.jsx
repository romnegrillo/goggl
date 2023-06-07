import { Link } from 'react-router-dom';

import Search from './Search';

const Navbar = ({ darkTheme, setDarkTheme }) => {
  return (
    <div className="p-5 flex flex-wrap justify-center border-b dark:border-gray-700 border-gray-200">
      <div className="flex justify-between items-center  w-full">
        <Link to="/">
          <p className="text-2xl bg-blue-500 font-bold text-white py-1 px-2 rounded dark:bg-gray-500 ">
            Goggl 🔎
          </p>
        </Link>
        <button
          onClick={() => {
            setDarkTheme(!darkTheme);
          }}
          className="text-xl dark:bg-gray-50 dark:text-gray-900 bg-white rounded-full px-2 py-1 hover:shadow-lg"
        >
          {darkTheme ? 'Light ☀️' : 'Dark 🌙'}
        </button>
      </div>
      {/* <Search /> */}
    </div>
  );
};

export default Navbar;
