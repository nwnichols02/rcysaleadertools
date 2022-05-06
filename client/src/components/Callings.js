import React from "react";
import { useNavigate } from "react-router";

export default function Callings() {
  const navigate = useNavigate();
  const homeRoute = () => {
      navigate('/Home')
  }
  const newCallingRoute = () => {
      navigate('/Callings/new')
  }
  const editCallingRoute = () => {
      navigate('/Callings/edit/:id')
  }
  return (
    <div>
        <button onClick={homeRoute}>Home</button>
      <h1>Callings page</h1>
      <header>
        <button onClick={newCallingRoute}>New Calling</button>
        <button onClick={editCallingRoute}>Edit Calling</button>
      </header>
    </div>
  );
}
