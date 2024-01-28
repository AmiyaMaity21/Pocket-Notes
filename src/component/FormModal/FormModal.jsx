import { useState } from "react";
import React from 'react'
import "./FormModal.css"
const FormModal = ({ isOpen, onClose, addUser }) => {
    const [formData, setFormData] = useState({
        groupName: "",
        chooseColor: "",
    })
    const handleInputChange = (event) => {
        setFormData({ ...formData, groupName: event.target.value });
    }
    const handleColorButtonClick = (color) => {
        setFormData({ ...formData, chooseColor: color });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        addUser(formData);
        onClose();
    }
    return (
        isOpen ? (
            <div className="formmodal">
                <p>Create New group</p>
                <div className="groupname">
                    <p>Group Name</p>
                    <input
                        name="groupName"
                        type="text"
                        placeholder="Enter group name"
                        style={{ width: "250px", borderRadius: "16px", border: "2px solid #CCCCCC", padding: "8px 14px", outline: "none" }}
                        onChange={(event) => handleInputChange(event)}
                    ></input>
                </div>
                <div className="choosecolour">
                    <p>Choose colour</p>
                    <div className="choosecolorbutton" name="chooseColor">
                        <button className="dot violet" type="button" onClick={() => handleColorButtonClick('#B38BFA')}></button>
                        <button className="dot pink" type="button" onClick={() => handleColorButtonClick('#FF79F2')} ></button>
                        <button className="dot skyblue" type="button" onClick={() => handleColorButtonClick('#43E6FC')} ></button>
                        <button className="dot orange" type="button" onClick={() => handleColorButtonClick('#F19576')} ></button>
                        <button className="dot blue" type="button" onClick={() => handleColorButtonClick('#0047FF')} ></button>
                        <button className="dot lightblue" type="button" onClick={() => handleColorButtonClick('#6691FF')} ></button>
                    </div>
                </div>
                <button className="create" onClick={handleSubmit}>Create</button>
            </div >
        ) : (null)
    );
}

export default FormModal;