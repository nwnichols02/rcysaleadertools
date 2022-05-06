import React from "react";
import { useNavigate, useParams } from "react-router";
import '../Modal.css'
import axios from "axios";
import { useEffect, useState } from "react";

export default function DeletePrayerModal ({closeModal}){
    let params = useParams();
    const navigate = useNavigate();
    const prayerRoute = () => {
        navigate('/Prayers')
    }

    const getAllPrayers = () => {
        axios
          .get(`http://localhost:9000/api/prayers`)
          .then((res) => {
            return res.data;
          })
          .catch((err) => console.err(`ERROR: ${err}`));
      };

    const deletePrayerById = () => {
        
        axios.delete(`http://localhost:9000/api/prayers/${params.id}`)
            .then(res => {
                console.log('successful deletion')
                getAllPrayers();
                prayerRoute()
            })
            .catch(err => console.log(err)) 
    }

    return(
        <div className="modalBackground">
            <div className="modalContainer">
                <div className="titleCloseBtn">
                    <button onClick={prayerRoute}> X </button>
                </div>
                <div className="title">
                    <h1>Are you sure you want to delete these prayers?</h1>
                </div>
                <div className="footer">
                    <button id="cancelBtn" onClick={prayerRoute}>Cancel</button>
                    <button onClick={() => deletePrayerById()}>Continue</button>
                </div>
            </div>
        </div>
    )
}