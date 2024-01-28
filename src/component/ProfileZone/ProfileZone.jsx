import { useState } from "react"
import "./ProfileZone.css"
const ProfileZone = ({ showFormModal, userList, setSelectUser }) => {
    const [currentUser, setCurrentUser] = useState(null)
    function getAvatarWord(fullName) {
        var nameArray = fullName.split(" ");
        var initials = "";
        for (var i = 0; i < Math.min(2, nameArray.length); i++) {
            initials += nameArray[i].charAt(0);
        }
        initials = initials.toUpperCase();
        return initials;
    }

    return (
        <div className="profilezone">
            <p className="heading">Pocket Notes</p>
            {userList &&
                userList?.map((user, index) => {
                    return (
                        <div className="body"
                            key={index}
                            style={{ background: `${currentUser === index ? "rgba(47, 47, 47, 0.17)" : ""}` }}
                            onClick={() => { setSelectUser(user); setCurrentUser(index) }}
                        >
                            <button className="avataricon" style={{ background: `${user?.chooseColor}` }}>{getAvatarWord(user?.groupName)}</button>
                            <p>{user?.groupName}</p>
                        </div>
                    );
                })}
            <button className="addbutton" onClick={showFormModal}>
                +
            </button>
        </div>
    )
}

export default ProfileZone;