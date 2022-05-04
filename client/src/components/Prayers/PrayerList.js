import React from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import { useEffect, useState } from "react";
import AllPrayers from "./AllPrayers";
import EditPrayers from './EditPrayers';

export default function PrayerList() {
  const [prayers, getPrayers] = useState([]);

  const navigate = useNavigate();
  const homeRoute = () => {
    navigate("/home");
  };
  const addPrayerRoute = () => {
    navigate("/prayerlist/add");
  };
  const editPrayerRoute = () => {
    navigate("/prayerlist/edit/:id");
  };
  const url = "http://localhost:9000";

  const getAllPrayers = () => {
    axios
      .get(`${url}/api/prayers`)
      .then((res) => {
        const allPrayers = res.data;
        getPrayers(allPrayers);
      })
      .catch((err) => console.err(`ERROR: ${err}`));
  };

  useEffect(() => {
    getAllPrayers();
  }, []);

  return (
    <div>
      <button onClick={homeRoute}>Home</button>
      <h1>PrayerList page</h1>
      <nav className="prayernavbtns">
        <button onClick={addPrayerRoute}>Add Prayers</button>
      </nav>
      <div className="tableContainer">
        <AllPrayers allPrayers={prayers} />
        <EditPrayers allPrayers={prayers} />
      </div>
    </div>
  );
}
