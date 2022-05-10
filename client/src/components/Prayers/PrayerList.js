import { useNavigate } from "react-router";
import axios from "axios";
import { useEffect, useState } from "react";
import AllPrayers from "./AllPrayers";
import EditPrayers from './EditPrayers';
import PrayersSearch from "./PrayersSearch";
import SideBar from "../SideBar";

export default function PrayerList() {
  const [prayers, getPrayers] = useState([]);

  const navigate = useNavigate();
  const homeRoute = () => {
    navigate("/Home");
  };
  const addPrayerRoute = () => {
    navigate("/Prayers/add");
  };
  const editPrayerRoute = () => {
    navigate("/Prayers/edit/:id");
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
      <SideBar/>
      <button onClick={homeRoute}>Home</button>
      {/* <PrayersSearch allPrayers={prayers}/> */}
      <h1>PrayerList page</h1>
      <nav className="prayernavbtns">
        <button onClick={addPrayerRoute}>Add Prayers</button>
      </nav>
      <div className="tableContainer">
        <AllPrayers allPrayers={prayers} />
        {/* <EditPrayers allPrayers={prayers} /> */}
      </div>
    </div>
  );
}
