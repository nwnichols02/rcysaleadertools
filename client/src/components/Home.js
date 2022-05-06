import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router";
import LogoutModal from "./LogoutModal";

export default function Home(){

    const [openModal, setOpenModal] = useState(false)


    const navigate = useNavigate();
    const callingsRoute = () => {
        navigate('/callings')
    }
    const agendasRoute = () => {
        navigate('/agendas')
    }
    const recentlySpakeRoute = () => {
        navigate('/recentlyspake')
    }
    const prayerRoute = () => {
        navigate('/prayerlist')
    }
    const settingsRoute = () => {
        navigate('/settings')
    }
    return(
        <div>
            <nav>
                <img/>
                <h4>Welcome user.name to RCYSA Leader Tools</h4>
                <a href={prayerRoute} onClick={prayerRoute}>Prayerzzz</a>
                <button onClick={() => setOpenModal(true)}>Logout</button>
                {openModal && <LogoutModal closeModal={setOpenModal}/>}
            </nav>
            <div className="top-navbar">
                <button onClick={prayerRoute}>Prayers List</button>
                <button onClick={recentlySpakeRoute}>Recently Spoke</button>
                {/* <button>New Members</button> */}
            </div>
            <div className="grid-navbar">
                <button onClick={agendasRoute}>Agendas</button>
                <button onClick={callingsRoute}>Callings</button>
                {/* <button>Interviews</button> */}
                {/* <button>Ordinations</button> */}
                <button onClick={settingsRoute}>Settings</button>
            </div>
        </div>
    )
}