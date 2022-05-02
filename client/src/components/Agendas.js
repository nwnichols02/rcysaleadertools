import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router";
import Modal from "./NewAgendaModal";


export default function Agendas(){

    const [openModal, setOpenModal] = useState(false)

    const navigate = useNavigate();
    const homeRoute = () => {
        navigate('/home')
    }
    return(
        <div>
            <button onClick={homeRoute}>Home</button>
            <h1>Agendas page</h1>
            <button className="openModal" onClick={() => {setOpenModal(true)}}>openModal</button>
            {openModal && <Modal closeModal={setOpenModal}/>}
        </div>
    )
}