import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRedditPosts } from './postsSlice';
import Post from "./post/Post";
import './Posts.css';

export default function Posts({ subreddit }) {
    const dispatch = useDispatch();
    const posts = useSelector(state => state.posts.posts);
    const status = useSelector(state => state.posts.status);
    const error = useSelector(state => state.posts.error);

    useEffect(() => {
        if (subreddit) {
            dispatch(fetchRedditPosts(subreddit));
        }
    }, [dispatch, subreddit]);

    if (status === 'loading') {
        return <div>Loading...</div>;
    }

    if (status === 'failed') {
        return <div>Error: {error} </div>;
    }

    return (
        <div className="posts-container">
            <h2>Top Posts from r/{subreddit}</h2>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        <Post 
                            title={post.title}
                            text={post.selftext}
                            link={post.permalink}
                            score={post.score}
                            author={post.author}
                            imageLink={post?.url}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
}
