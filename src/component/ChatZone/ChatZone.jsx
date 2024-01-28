import React, { useState, useEffect } from 'react'
import "./Chat.css"
import Send from "../../assets/send.png"
import Dot from "../../assets/dot.png"
const ChatZone = ({ chat, handleStorage }) => {
    const [chatInput, setChatInput] = useState("")
    const [chatList, setChatList] = useState([])
    useEffect(() => {
        setChatList(chat?.chatList ? chat.chatList : [])
    }, [chat])
    function getAvatarWord(fullName) {
        var nameArray = fullName.split(" ");
        var initials = "";
        for (var i = 0; i < Math.min(2, nameArray.length); i++) {
            initials += nameArray[i].charAt(0);
        }
        initials = initials.toUpperCase();
        return initials;
    }
    function getDate() {
        var currentDate = new Date();
        var day = currentDate.toLocaleString("en-US", { day: "numeric" });
        var month = currentDate.toLocaleString("en-US", { month: "short" });
        var year = currentDate.toLocaleString("en-US", { year: "numeric" });
        var formattedDate = `${day} ${month} ${year}`;
        return formattedDate;
    }
    function getTime() {
        var currentDate = new Date();
        var hour = currentDate.getHours();
        var minute = currentDate.getMinutes();
        var ampm = hour >= 12 ? "PM" : "AM";
        hour = hour % 12 || 12;
        minute = minute < 10 ? "0" + minute : minute;
        var formattedTime = `${hour}:${minute} ${ampm}`;
        return formattedTime;
    }
    function handleChatInput(event) {
        event.preventDefault();
        setChatInput(event.target.value)
    }
    function sendChat() {
        const content = chatInput;
        const date = getDate();
        const time = getTime();
        const chatItems = { content, date, time }
        setChatList([...chatList, chatItems])
        setChatInput("")
        handleStorage({ ...chat, chatList: [...chatList, chatItems] })
    }
    return (
        <div className="chatzone">
            <div className="chathead">
                <button className="chatavatoricon" style={{ background: `${chat?.chooseColor}` }}>
                    {getAvatarWord(chat?.groupName)}
                </button>
                <p>{chat?.groupName}</p>
            </div>

            {chatList &&
                chatList?.map((chat, id) => {
                    return (
                        <div className="chatbody" key={id}>
                            <p>{chat.content}</p>
                            <div className="chatcontent">
                                <p>{chat.date}</p>
                                <p><img style={{ width: "6px", height: "6px", margin: "2px" }} src={Dot} alt="" /></p>
                                <p>{chat.time}</p>
                            </div>
                        </div>
                    )
                })}
            <div className="chatinputarea">
                <textarea className="textarea"
                    value={chatInput}
                    onChange={(event) => handleChatInput(event)}
                    placeholder="Enter your text here...........">
                </textarea>
                <button className="sendbutton" onClick={sendChat}>
                    <img style={{ width: "25px", height: "22px", marginRight: "5px", }} src={Send} alt="" />
                </button>
            </div>
        </div >
    )
}

export default ChatZone;