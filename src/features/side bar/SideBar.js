import { TbSquareToggle } from "react-icons/tb";
import './SideBar.css'


export default function SideBar() {
    const handleClick = (e) => {
        e.preventDefault();
        const expandSideBar = document.body.querySelector('.sb-collapse');
        const collapseSideBar = document.body.querySelector('.grid-container');

        if (expandSideBar) {
            expandSideBar.classList.remove('sb-collapse');
            expandSideBar.classList.add('grid-container');
        } else if (collapseSideBar) {
            collapseSideBar.classList.remove('grid-container');
            collapseSideBar.classList.add('sb-collapse');
        }
    } 

    return (
        <div>
            <h2>Sub Reddits:</h2>
            <button onClick={handleClick}>
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