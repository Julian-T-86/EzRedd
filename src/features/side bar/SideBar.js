import { TbSquareToggle } from "react-icons/tb";
import './SideBar.css'


export default function SideBar({ toggleSideBar }) {
    

    return (
        <div>
            <h2>Sub Reddits:</h2>
            <button onClick={toggleSideBar}>
                <TbSquareToggle 
                    size='20px'
                    style={{
                        color: '#92140c'
                    }} />
            </button>
            <ul>
                <li>Sub Reddit 1</li>
                <li>Sub Reddit 2</li>
                <li>Sub Reddit 3</li>
            </ul>
        </div>
    );
}