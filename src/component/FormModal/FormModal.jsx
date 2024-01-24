// import "react-responsive-modal/styles.css";
// import { Modal } from "react-responsive-modal";
import { useState } from "react";
import React from 'react'
const FormModal = ({ isOpen, onClose, onFormSubmit }) => {
    const [formData, setFormData] = useState({
        groupName: "",
        chooseColor: "",
    })

    if (!isOpen) {
        return null;
    }
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };
    const handleColorButtonClick = (color) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            chooseColor: color,
        }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('formData', JSON.stringify(formData));
        // Call the onFormSubmit prop with the form data
        onFormSubmit(formData);
    };
    console.log(formData)
    return (
        <div
            style={{
                width: "450px",
                height: "185px",
                padding: "16px",
                background: "#FFFFFF",
                fontSize: "20px",
                marginTop: "35vh",
                marginLeft: "20vw",
                display: "block",
                position: "absolute"
            }}
        >
            <p>Create New group</p>
            <div style={{ display: "flex", gap: "28px", margin: "16px 0px" }}>
                <p>Group Name</p>
                <input
                    name="groupName"
                    type="text"
                    placeholder="Enter group name"
                    style={{ width: "250px", borderRadius: "16px", border: "2px solid #CCCCCC", padding: "8px 14px", outline: "none" }}
                    value={formData.groupName}
                    onChange={handleInputChange}
                ></input>
            </div>
            <div
                style={{ display: "flex", gap: "28px", margin: "24px 0px" }}
            >
                <p>Choose colour</p>
                <div
                    name="chooseColor"
                    value={formData.chooseColor}
                    onChange={handleInputChange}
                    style={{ display: "flex", gap: "6px" }}
                >
                    <button type="button" onClick={() => handleColorButtonClick('#B38BFA')} style={{ height: "30px", width: "30px", background: "#B38BFA", borderRadius: "100%", border: "none" }}></button>
                    <button style={{ height: "30px", width: "30px", background: "#FF79F2", borderRadius: "100%", border: "none" }}></button>
                    <button style={{ height: "30px", width: "30px", background: "#43E6FC", borderRadius: "100%", border: "none" }}></button>
                    <button style={{ height: "30px", width: "30px", background: "#F19576", borderRadius: "100%", border: "none" }}></button>
                    <button style={{ height: "30px", width: "30px", background: "#0047FF", borderRadius: "100%", border: "none" }}></button>
                    <button style={{ height: "30px", width: "30px", background: "#6691FF", borderRadius: "100%", border: "none" }}></button>
                </div>
            </div>
            <button style={{
                marginLeft: "21vw",
                background: "#001F8B",
                border: "none",
                color: "white",
                padding: "7px 36px",
                borderRadius: "12px",
            }}
                onClick={handleSubmit}
            >Create</button>
        </div>
    )
}

export default FormModal;