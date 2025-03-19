import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Items from './pages/Items';
import Register from './pages/Register';
import Login from './pages/Login';
import PrivateRoute from './components/PrivateRoute';
import AddItem from './pages/AddItem';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">HOME</Link>
        <Link to="/items">BROWSE</Link>
        <Link to="/register">REGISTER</Link>
        <Link to="/login">LOGIN</Link>
        <Link to="/add-item">UPLOAD</Link>
      </nav>
      <Routes>
        <Route path="/" element={<h1>Welcome to Phreaky Phriday!</h1>} />
        <Route path="/items" element={<Items />}/>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/add-item" element={<PrivateRoute element={<AddItem />} />} />

      </Routes>
    </Router>
  );
}

export default App;
