import React from "react";
import { useNavigate } from "react-router";
import Header2 from "./Header2";

export default function RecentlySpake(){
    const navigate = useNavigate();
    const homeRoute = () => {
        navigate('/Home')
    }
    return(
        <div>
            <Header2/>
            <button onClick={homeRoute}>Home</button>
            <h1>RecentlySpake page</h1>
        </div>
    )
}