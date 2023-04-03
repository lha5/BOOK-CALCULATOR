import { Routes, Route } from 'react-router-dom';

import Home from './home';
import Spine from './spine';
import Estimate from './estimate';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/spine" element={<Spine />} />
      <Route path="/estimate" element={<Estimate />} />
    </Routes>
  );
}

export default App;
