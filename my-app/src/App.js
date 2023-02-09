import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Signup from './pages/Signup';
import User from './pages/User';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/Signup" element={<Signup />}/>
          <Route path="/User/:id" element={<User />}/>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
