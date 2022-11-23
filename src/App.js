import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './component/Navbar';
import Home from './component/Home';
import NotFound from './component/NotFound';
import Details from './component/Details';

const App = () => (
  <div className="App">
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details" element={<Details />} />
      <Route path="/not-found" element={<NotFound />} />
      <Route path="*" element={<Navigate replace to="/not-found" />} />
    </Routes>
  </div>
);

export default App;
