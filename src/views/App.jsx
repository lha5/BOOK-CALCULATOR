import { Outlet } from 'react-router-dom';

import Navbar from 'components/layout/Navbar';
import Footer from 'components/layout/Footer';

function App() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto">
        <Outlet />
        <Footer />
      </div>
    </>
  );
}

export default App;
