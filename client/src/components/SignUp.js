import React from "react";
import { useNavigate } from "react-router";

export default function SignUp(){
    const navigate = useNavigate();
    const loginRoute = () => {
        navigate('/')
    }
    return(
        <div>
            <button onClick={loginRoute}>Login Page</button>
            <h1>SignUp page</h1>
        </div>
    )
}