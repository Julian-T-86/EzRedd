import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPopularSubreddits } from './sideBarSlice';
import { TbSquareToggle } from "react-icons/tb";
import './SideBar.css';

export default function SideBar({ toggleSideBar, onSubredditChange }) {
    const dispatch = useDispatch();
    const filteredSubreddits = useSelector(state => state.subreddits.filteredSubreddits);
    const topSubreddits = useSelector(state => state.subreddits.topSubreddits);
    const status = useSelector(state => state.subreddits.status);
    const error = useSelector(state => state.subreddits.error);

    useEffect(() => {
        dispatch(fetchPopularSubreddits());
    }, [dispatch]);

    const handleSubredditClick = (subreddit) => {
        onSubredditChange(subreddit);
    };

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
                {filteredSubreddits.map(subreddit => (
                    <li key={subreddit} onClick={() => handleSubredditClick(subreddit)}>
                        {subreddit}
                    </li>
                ))}
                {topSubreddits.map(subreddit => (
                    <li key={subreddit} onClick={() => handleSubredditClick(subreddit)}>
                        {subreddit}
                    </li>
                ))}
            </ul>
        </div>
    );
}
