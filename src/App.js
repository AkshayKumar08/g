import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Blog from './pages/Blogs/pages';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Blog />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
