// import { BiSolidComment } from "react-icons/bi";
// import { BsShareFill } from "react-icons/bs";
import { AiFillLike, AiFillDislike } from "react-icons/ai";
import './Post.css';
import fallbackImage from '../../../SadReddit.png'

export default function Post({ title, text, link, score, author, imageLink }) {

    const postURL = `https://www.reddit.com${link}`

    //check if the link actually refers to a photo and not site or gallery
    const isImage = imageLink.includes('.png') || imageLink.includes('.jpeg');

    return (
        <div className="post-container">
            <a href={postURL} target="_blank" rel="noopener noreferrer">
                <h3>{title}</h3>
            </a>
            <p>Posted by {author}</p>
            <h5>{text}</h5>

            {isImage
            ? <img src={imageLink} alt="Post image" />
            : <img src={fallbackImage} alt={'fall back image'}/>
            }

            <div className="icon-container">
                {/* <BiSolidComment className="post-icon"/> */}
                {/* <BsShareFill className="post-icon"/> */}
                <AiFillLike className="post-icon" color="limegreen"/>
                <p>{score}</p>
                <AiFillDislike  className="post-icon" color="#92140c"/>
            </div>
            <hr/>
        </div>
    );
}