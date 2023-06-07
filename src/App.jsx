import { useState } from 'react';

import Navbar from './components/Navbar';
import SectionRoutes from './components/SectionRoutes';
import Footer from './components/Footer';

const App = () => {
  const [darkTheme, setDarkTheme] = useState(true);

  return (
    <div className={darkTheme ? 'dark' : ''}>
      <div className="bg-gray-100 dark:bg-gray-900 dark:text-gray-200 min-h-screen w-full flex flex-col">
        <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
        <SectionRoutes />
        <Footer />
      </div>
    </div>
  );
};

export default App;
