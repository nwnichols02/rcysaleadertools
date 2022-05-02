import React from "react";
import { useNavigate } from "react-router";
import './Modal.css'

export default function LogoutModal ({closeModal}){
    const navigate = useNavigate();
    const logoutRoute = () => {
        navigate('/')
    }
    return(
        <div className="modalBackground">
            <div className="modalContainer">
                <div className="titleCloseBtn">
                    <button onClick={() => {closeModal(false)}}> X </button>
                </div>
                <div className="title">
                    <h1>Are you sure you want to Logout?</h1>
                </div>
                {/* <div className="body">
                    <p>The next page is awesome! you'll like it!</p>
                </div> */}
                <div className="footer">
                    <button id="cancelBtn" onClick={() => {closeModal(false)}}>Cancel</button>
                    <button onClick={logoutRoute}>Continue</button>
                </div>
            </div>
        </div>
    )
}