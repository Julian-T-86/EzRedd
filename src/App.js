import React from 'react';
import SearchBar from './features/search bar/SearchBar';
import SideBar from './features/side bar/SideBar';
import { useState } from "react";
import Posts from './features/posts/Posts';
import './App.css';

function App() {
  const  [isExpanded, setIsExpanded]  = useState(true);

  const toggleSideBar = (e) => {
    e.preventDefault();
    setIsExpanded(!isExpanded);
  }

  return (
    <div className={isExpanded ? 'grid-container' : 'sb-collapse'}>
      <SearchBar/>
      <SideBar toggleSideBar={toggleSideBar}/>
      <Posts />
    </div>
  );
}

export default App;