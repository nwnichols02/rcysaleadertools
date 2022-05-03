import React from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import { useEffect, useState } from "react";
import AllPrayers from "./AllPrayers";
import AddPrayer from "./AddPrayers";

export default function PrayerList() {
  const [prayers, getPrayers] = useState([]);



  const navigate = useNavigate();
  const homeRoute = () => {
    navigate("/home");
  };
  const addPrayerRoute = () => {
    navigate('/prayerlist/add')
}
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
        <button>Edit Prayers</button>
      </nav>
      <div className="tableContainer">
        <AllPrayers allPrayers={prayers} />
        {/* <AddPrayer/> */}
        {/* <table>
          <thread>
            <th>Name</th>
            <th>Date</th>
          </thread>
          <tbody>
            <td>Nate</td>
            <td>1/1/2201</td>
          </tbody>
          <tbody>
            <td>Joe</td>
            <td>2/2/2200</td>
          </tbody>
        </table> */}
      </div>
    </div>
  );
}
