import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRedditPosts } from './PostsSlice';

import { BsDisplay } from "react-icons/bs";
import Post from "./post/Post";
import './Posts.css';

export default function Posts({ subreddit }) {
    const dispatch = useDispatch();
    const posts = useSelector(state => state.reddit.posts);
    const status = useSelector(state => state.reddit.status);
    const error = useSelector(state => state.reddit.error);

    useEffect(() => {
        dispatch(fetchRedditPosts(subreddit));
    }, [dispatch, subreddit])

    if (status === 'loading') {
        return <div>Loading...</div>
    }

    if (status === 'failed') {
        return <div>Error: {error} </div>
    }
    return (
        <div className="posts-container"> 
            <h2>Top Posts from r/{subreddit}</h2>
            <ul>
                {posts.map(post => (
                <li key={post.id}>
                    <a href={`https://www.reddit.com${post.permalink}`} target="_blank" rel="noopener noreferrer">
                    {post.title}
                        <p>{post.selftext}</p>
                    </a>
                    
                </li>
                ))}
            </ul>
        </div>
    );
}