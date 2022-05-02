import React from "react";
import './Modal.css'

export default function Modal ({closeModal}){
    return(
        <div className="modalBackground">
            <div className="modalContainer">
                <div className="titleCloseBtn">
                    <button onClick={() => {closeModal(false)}}> X </button>
                </div>
                <div className="title">
                    <h1>Are you sure you want to continue?</h1>
                </div>
                <div className="body">
                    <p>The next page is awesome! you'll like it!</p>
                </div>
                <div className="footer">
                    <button id="cancelBtn" onClick={() => {closeModal(false)}}>Cancel</button>
                    <button >Continue</button>
                </div>
            </div>
        </div>
    )
}