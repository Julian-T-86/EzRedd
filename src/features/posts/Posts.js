import { BsDisplay } from "react-icons/bs";
import Post from "./post/Post";

export default function Posts() {
    const styles = {
        gridArea: 'posts', 
        // backgroundColor: '#1E1E24',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        overflow: 'auto'
    }
    return (
        <div style={styles}> 
            <Post />
            <Post />
        </div>
    );
}