import React from 'react'
import Send from "../../assets/send.png"
import Dot from "../../assets/dot.png"
const ChatZone = () => {
    return (
        <div
            style={{
                width: "75vw",
                height: "100vh",
                background: "#DAE5F5",
                display: "flex",
                flexDirection: "column",
            }}
        >
            <div
                style={{
                    height: "8vh",
                    background: "#001F8B",
                    color: "white",
                    fontSize: "20px",
                    display: "flex",
                    alignItems: "center",
                    gap: "20px",
                    padding: "10px"
                }}
            >
                <button
                    style={{
                        width: "50px",
                        height: "50px",
                        color: "white",
                        fontSize: "20px",
                        background: "#0047FF",
                        borderRadius: "100%",
                        border: "none"
                    }}>MN</button>
                <p>My Notes</p>
            </div>
            <div

                style={{
                    background: "white",
                    margin: "25px 25px 0px",
                    padding: "15px",
                    display: "flex",
                    flexDirection: "column"
                }}>
                <p>Another productive way to use this tool to begin a daily writing routine. One way is to generate a random
                    paragraph with the intention to try to rewrite it while still keeping the original meaning. The purpose here
                    is to just get the writing started so that when the writer goes onto their day's writing projects, words are already
                    flowing from their fingers.</p>
                <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", gap: "12px" }}>
                    <p>9 Mar 2023</p>
                    <p><img style={{ width: "7px", height: "7px" }} src={Dot} alt="" /></p>
                    <p>10:10 AM</p>
                </div>

            </div>
            <div
                style={{
                    height: "25vh",
                    background: "#001F8B",
                }}
            >
                <textarea
                    style={{
                        width: "72.4vw",
                        height: "75%",
                        margin: "20px",
                        padding: "15px 15px",
                        boxSizing: "border-box",
                        borderRadius: "6px",
                        border: "none",
                        outline: "none",
                        resize: "none"
                    }}
                    placeholder="Enter your text here...........">
                </textarea>
                <button style={{
                    position: "absolute",
                    right: "2.5vw",
                    top: "48vh",
                    background: "none",
                    border: "none"
                }}>
                    <img style={{ width: "25px", height: "22px", marginRight: "5px", }} src={Send} alt="" />
                </button>
            </div>
        </div >
    )
}

export default ChatZone;