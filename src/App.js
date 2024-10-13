import React from 'react';
import SearchBar from './features/search bar/SearchBar';
import SideBar from './features/side bar/SideBar';
import { useState } from "react";
import Posts from './features/posts/Posts';
import './App.css';

function App() {
  const  [isExpanded, setIsExpanded]  = useState(true);
  const [selectedSubreddit, setSelectedSubreddit] = useState('reactjs')

  const toggleSideBar = (e) => {
    e.preventDefault();
    setIsExpanded(!isExpanded);
  }

  const handleSubredditChange = (subreddit) => {
    setSelectedSubreddit(subreddit);
  }

  return (
    <div className={isExpanded ? 'grid-container' : 'sb-collapse'}>
      <SearchBar/>
      <SideBar toggleSideBar={toggleSideBar} onSubredditChange={handleSubredditChange}/>
      <Posts subreddit={selectedSubreddit}/>
    </div>
  );
}

export default App;