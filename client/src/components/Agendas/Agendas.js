import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import Modal from "../NewAgendaModal";
import axios from "axios";
import AllAgendas from "./AllAgendas";

export default function Agendas(){

    const [openModal, setOpenModal] = useState(false)
    const [agendas, getAgendas] = useState([]);

    const navigate = useNavigate();
    const homeRoute = () => {
        navigate('/Home')
    }

    const url = "http://localhost:9000";

    const getAllAgendas = () => {
        axios
          .get(`${url}/api/agendas`)
          .then((res) => {
              console.log(res.data)
            const allAgendas = res.data;
            getAgendas(allAgendas);
          })
          .catch((err) => console.err(`ERROR: ${err}`));
      };

    useEffect(() => {
        getAllAgendas()
    }, [])

    return(
        <div>
            <div>
            <button onClick={homeRoute}>Home</button>
            <h1>Agendas page</h1>
            <button className="openModal" onClick={() => {setOpenModal(true)}}>openModal</button>
            {openModal && <Modal closeModal={setOpenModal}/>}
            </div>
            <AllAgendas allAgendas={agendas}/>
        </div>
    )
}