import React from 'react';
import SearchBar from './features/search bar/SearchBar';
import SideBar from './features/side bar/SideBar';
import Posts from './features/posts/Posts';
import './App.css';

function App() {
  
  return (
    <div className='grid-container'>
      <SearchBar />
      <SideBar />
      <Posts />
    </div>
  );
}

export default App;