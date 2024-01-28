import React from 'react'
import "./DisplayZone.css"
import BackgroundImage from "../../assets/BackgroundImage.png"
import LockImage from "../../assets/lock.png"
const DisplayZone = () => {
    return (
        <div className="displayzone">
            <div className="displaybody">
                <img className="displayimg" src={BackgroundImage} alt="" />
                <p className="bodyhead">Pocket Notes</p>
                <p className="subhead">Send and receive messages without keeping your phone online.</p>
                <p className="subhead">Use Pocket Notes on up to 4 linked devices and 1 mobile phone</p>
            </div>
            <footer className="footer">
                <img className="encrypted"src={LockImage} alt="" />
                <p>end-to-end encrypted</p>
            </footer>
        </div>
    )
}

export default DisplayZone;