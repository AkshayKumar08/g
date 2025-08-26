import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Blog from './pages/Blogs/pages';
import Home from './pages/Home/pages';


function App() {
  return (
    <Router basename="/g">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
