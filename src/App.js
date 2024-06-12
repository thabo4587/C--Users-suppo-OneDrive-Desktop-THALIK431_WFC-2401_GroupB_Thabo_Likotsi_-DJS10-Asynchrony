// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BlogPosts from './BlogPosts';
import ErrorPage from './Errorpage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BlogPosts />} />
        <Route path="/error" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
