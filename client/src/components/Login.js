import React from "react";
import { useNavigate } from "react-router";

export default function Login(){
    const navigate = useNavigate();
    const loginRoute = () => {
        navigate('/home')
    }
    const signUpRoute = () => {
        navigate('/signup')
    }

    const handleSubmit = (evt) => {
        evt.preventDefault()
        // navigate('/home')
    }

    return(
        <div>
            <header>
                <img/>
                <button onClick={signUpRoute}>Sign Up</button>
            </header>
            <div className="left div">

            </div>
            <div className="right div">
            <h1>Sign in To RCYSA Leader Tools</h1>
            <h2>Enter Your Login Credentials to Access Your Account</h2>
            <div className="form">
                <form>
                    <div className="input-container">
                        <label>Username</label>
                        <input type='text' name='name'/>
                    </div>
                    <div className="input-container">
                        <label>Password</label>
                        <input type='password' name='pass'/>
                    </div>
                    <div className="button-container">
                        <input type='submit' onClick={loginRoute} /*onSubmit={handleSubmit}*//>
                    </div>
                </form>
            </div>
            </div>
        </div>
    )
}