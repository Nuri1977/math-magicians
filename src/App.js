import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Quote from './pages/Quote';
import Calculator from './components/Calculator';
import Navigation from './pages/Navigation';

const App = () => (
  <div>
    <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="calculator" element={<Calculator />} />
      <Route path="quote" element={<Quote />} />
    </Routes>
  </div>
);

export default App;
