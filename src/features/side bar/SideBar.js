// SideBar.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPopularSubreddits } from './sideBarSlice';
import { TbSquareToggle } from "react-icons/tb";
import './SideBar.css';

export default function SideBar({ toggleSideBar, onSubredditChange }) {
  const dispatch = useDispatch();
  const subreddits = useSelector(state => state.subreddits.subreddits);
  const status = useSelector(state => state.subreddits.status);
  const error = useSelector(state => state.subreddits.error);

  useEffect(() => {
    dispatch(fetchPopularSubreddits());
  }, [dispatch]);

  const handleSubredditClick = (subreddit) => {
    onSubredditChange(subreddit);
  };

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>Sub Reddits:</h2>
      <button onClick={toggleSideBar}>
        <TbSquareToggle 
          size='20px'
          style={{ color: '#92140c' }} 
        />
      </button>
      <ul>
        {subreddits.map(subreddit => (
          <li key={subreddit} onClick={() => handleSubredditClick(subreddit)}>
            {subreddit}
          </li>
        ))}
      </ul>
    </div>
  );
}
