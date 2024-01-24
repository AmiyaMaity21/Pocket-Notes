import React from 'react'

const NotesZone = ({showFormModal}) => {
    return (
        <div
            style={{
                width: "25vw",
                height: "100vh",
                background: "white",
                padding: "2rem",
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "column",
                //alignItems: "center"
            }}>
            <p style={{ fontSize: "32px", textAlign: "center" }}>Pocket Notes</p>
            <div
                style={{
                    color: "white",
                    fontSize: "20px",
                    display: "flex",
                    marginTop: "32px",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    gap: "20px",
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
                <p style={{ color: "black" }}>My Notes</p>
            </div>
            <div
                style={{
                    color: "white",
                    fontSize: "20px",
                    display: "flex",
                    marginTop: "32px",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    gap: "20px",
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
                <p style={{ color: "black" }}>My Notes</p>
            </div>
            <div
                style={{
                    color: "white",
                    fontSize: "20px",
                    display: "flex",
                    marginTop: "32px",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    gap: "20px",
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
                <p style={{ color: "black" }}>My Notes</p>
            </div>
            <button
                style={{
                    width: "65px",
                    height: "65px",
                    fontSize: "50px",
                    background: "#16008B",
                    color: "white",
                    borderRadius: "100%",
                    border: "none",
                    marginTop: "24px",
                    marginLeft: "75%"
                }} 
                onClick={showFormModal}
                >
                +
            </button>
        </div>
    )
}

export default NotesZone;