import React from "react";
import { useNavigate } from "react-router";
import Header2 from "./Header2";

export default function Settings(){
    const navigate = useNavigate();
    const homeRoute = () => {
        navigate('/Home')
    }
    return(
        <div>
            <Header2/>
            <button onClick={homeRoute}>Home</button>
            <h1>Settings page</h1>
        </div>
    )
}