import { SlSocialReddit } from "react-icons/sl";
import { useState } from "react";
import './SearchBar.css'

export default function SearchBar() {
    

    return (
            <div className="head-wrapper">                
                <div>
                    <SlSocialReddit size='2.5rem' style={{position: "relative", top: '20px'}}/>
                    <h1>EzRedd</h1>
                </div>                

                <label>
                    <input 
                        name='search' 
                        defaultValue='Search...'
                    />
                </label> 
            </div>
    );
}
