import React from "react";
import { useNavigate } from "react-router";
import Header2 from "./Header2";

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
      <Header2/>
        <button onClick={homeRoute}>Home</button>
      <h1>Callings page</h1>
      <header>
        <button onClick={newCallingRoute}>New Calling</button>
        <button onClick={editCallingRoute}>Edit Calling</button>
      </header>
    </div>
  );
}
