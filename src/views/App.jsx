import { Outlet } from 'react-router-dom';

import Navbar from 'components/layout/Navbar';
import Footer from 'components/layout/Footer';

function App() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 md:px-0 pb-14">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default App;
