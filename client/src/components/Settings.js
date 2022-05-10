import React from "react";
import { useNavigate } from "react-router";
import SideBar from "./SideBar";

export default function Settings(){
    const navigate = useNavigate();
    const homeRoute = () => {
        navigate('/Home')
    }
    return(
        <div>
            <SideBar/>
            <button onClick={homeRoute}>Home</button>
            <h1>Settings page</h1>
        </div>
    )
}