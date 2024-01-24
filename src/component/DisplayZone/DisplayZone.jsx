import React from 'react'
import BackgroundImage from "../../assets/BackgroundImage.png"
import LockImage from "../../assets/lock.png"
const DisplayZone = () => {
    return (
        <div
            style={{
                width: "75vw",
                height: "100vh",
                background: "#DAE5F5",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "90vh"
                }}
            >
                <img style={{width: "500px", height: "250px"}} src={BackgroundImage} alt="" />
                <p
                style={{fontSize: "30px", fontWeight: "700"}}>Pocket Notes</p>
                <p style={{fontWeight: "500"}}>Send and receive messages without keeping your phone online.</p>
                <p style={{fontWeight: "500"}}>Use Pocket Notes on up to 4 linked devices and 1 mobile phone</p>
            </div>
            <footer
                style={{
                    display: "flex",
                    gap: "5px"
                }}
            >
                <img src={LockImage} alt="" />
                <p>end-to-end encrypted</p>
            </footer>
        </div>
    )
}

export default DisplayZone;