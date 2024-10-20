import React, { useState } from 'react';
import SearchBar from './features/search bar/SearchBar';
import SideBar from './features/side bar/SideBar';
import Posts from './features/posts/Posts';
import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
    const [isExpanded, setIsExpanded] = useState(true);
    const [selectedSubreddit, setSelectedSubreddit] = useState('reactjs');

    const toggleSideBar = (e) => {
        e.preventDefault();
        setIsExpanded(!isExpanded);
    };

    const handleSubredditChange = (subreddit) => {
        setSelectedSubreddit(subreddit);
    };

    return (
        <Router>
            <div className={isExpanded ? 'grid-container' : 'sb-collapse'}>
                <SearchBar onSubredditChange={handleSubredditChange} />
                <SideBar toggleSideBar={toggleSideBar} onSubredditChange={handleSubredditChange} />
                <Routes>
                    <Route path="/" element={<Posts subreddit={selectedSubreddit} />} />
                    <Route path="/:subreddit" element={<Posts subreddit={selectedSubreddit} />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;