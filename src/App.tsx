import React, { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import './App.scss';
import { Homepage } from './components/Homepage';
import { PageNotFound } from './components/PageNotFound';
import { User } from './components/User';
import { Users } from './components/Users';

const App: React.FC = () => {
  const [selectedUser, setSelectedUser] = useState(0);

  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link>
        <Link to="users" style={{marginLeft: '5px'}}>Users</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route 
          path="users" 
          element={<Users setSelectedUser={setSelectedUser} />} 
        />
        <Route 
          path={`users/${selectedUser}`} 
          element={<User selectedUser={selectedUser} />} 
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
