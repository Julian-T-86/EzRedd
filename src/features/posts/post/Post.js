import { BiSolidComment } from "react-icons/bi";
import { BsShareFill } from "react-icons/bs";
import { AiFillLike, AiFillDislike } from "react-icons/ai";
import './Post.css';

export default function Post({ title, text, link, score, author, imageLink }) {
    
    return (
        <div className="post-container">
            <a href={`https://www.reddit.com${link}`} target="_blank" rel="noopener noreferrer">
                <h3>{title}</h3>
            </a>
            <p>Posted by {author}</p>
            <h5>{text}</h5>

            <img 
                src={imageLink}
                alt="Post image"
            />
            <div className="icon-container">
                <BiSolidComment className="post-icon"/>
                <BsShareFill className="post-icon"/>
                <AiFillLike className="post-icon" color="limegreen"/>
                <p>{score}</p>
                <AiFillDislike  className="post-icon" color="#92140c"/>
            </div>
            <hr/>
        </div>
    );
}