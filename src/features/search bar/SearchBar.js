import { SlSocialReddit } from "react-icons/sl";
import { useState, useEffect } from "react";
import useDebounce from '../../hooks/useDebounce';
import './SearchBar.css';
import { useDispatch } from "react-redux";
import { fetchFilteredSubreddits } from "../side bar/sideBarSlice";
// import { setSearchTerm, filterPosts } from "../posts/postsSlice";

export default function SearchBar({ onSubredditChange }) {
    const dispatch = useDispatch();
    const [searchTerm, setSearchTerm] = useState('');
    const debouncedSearchTerm = useDebounce(searchTerm, 500);

    useEffect(() => {
        if (debouncedSearchTerm) {
            dispatch(fetchFilteredSubreddits(debouncedSearchTerm));
        }
    }, [debouncedSearchTerm, dispatch]);

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    return (
        <div className="head-wrapper">
            <div>
                <SlSocialReddit size='2.5rem' style={{ position: "relative", top: '20px' }} />
                <h1>EzRedd</h1>
            </div>
            <label>
                <input
                    value={searchTerm}
                    onChange={handleSearch}
                    name='search'
                    placeholder='Search...'
                />
            </label>
        </div>
    );
}