import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Glavna from './comp/Glavna';
import Druga from './comp/Grga';
import Grga from './comp/Grga';
import Rony from './comp/Rony';
import Messi from './comp/Messi';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Glavna />} />
      <Route path="/grga" element={<Grga />} />
      <Route path="/rony" element={<Rony />} />
      <Route path="/messi" element={<Messi />} />
    </Routes>
  );
}

export default App;

