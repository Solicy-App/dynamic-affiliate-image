
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Post from "./components/post";
import Navbar from "./components/navbar";

import './App.css';

export default function App() {
  return (
    <div className="app">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/post" element={<Post/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}