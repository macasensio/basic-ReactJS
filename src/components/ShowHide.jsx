import React, {useState} from "react";
import './ShowHide.css'

function ShowHide(){
    const [show, setShow] = useState(false)
    const handleClick = (e) => {
        setShow(!show)
    }
    return (
        <div className="ShowHide">
            <button onClick={handleClick}>{show ? 'Hide' : 'Show'} Website URL</button>
            
            {show && <h2><a href="https://www.tesla.com/" target="_blank">Tesla Website</a></h2> }
        </div>
    )
}

export default ShowHide