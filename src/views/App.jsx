import { Outlet } from 'react-router-dom';

import Navbar from 'components/layout/Navbar';
import Footer from 'components/layout/Footer';

function App() {
  return (
    <div className="container border border-red-300 mx-auto">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
