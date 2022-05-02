import React from "react";
import { useNavigate } from "react-router";

export default function PrayerList() {
  const navigate = useNavigate();
  const homeRoute = () => {
    navigate("/home");
  };
  return (
    <div>
      <button onClick={homeRoute}>Home</button>
      <h1>PrayerList page</h1>
      <nav className="prayernavbtns">
        <button>Add Prayers</button>
        <button>Edit Prayers</button>
      </nav>
      <div className="tableContainer">
        <table>
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
        </table>
      </div>
    </div>
  );
}
