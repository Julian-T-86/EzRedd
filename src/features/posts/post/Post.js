import { BiSolidComment } from "react-icons/bi";
import { BsShareFill } from "react-icons/bs";
import { AiFillLike, AiFillDislike } from "react-icons/ai";
import './Post.css';

export default function Post() {
    return (
        <div style={{color: "#92140c"}}>
            <h2>Post title</h2>
            <p>posted by "some redditor" "1 hour ago"</p>
            <img src="https://preview.redd.it/v6ohxvrj7jtd1.png?auto=webp&s=ebfce1c4ff7021514f5e5ebbe82a5e6a60d78cb7"></img>
            <div className="icon-container">
                <BiSolidComment className="post-icon"/>
                <BsShareFill className="post-icon"/>
                <AiFillLike className="post-icon" color="limegreen"/>
                <p style={{margin: '1.5rem 0px'}}>votes</p>
                <AiFillDislike  className="post-icon" color="#92140c"/>
            </div>
            <hr/>
        </div>
    );
}