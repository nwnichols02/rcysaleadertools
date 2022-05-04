import React from "react";
import { useNavigate } from "react-router";
import AddPrayer from "./AddPrayers";
import { Link } from "react-router-dom";

const AllPrayers = (props) => {
  const navigate = useNavigate();

  const editPrayerRoute = () => {
    navigate("/prayerlist/edit/:id");
  };
  return (
    <div>
      {props.allPrayers.map((prayer) => {
        return (
          <div key={prayer.prayer_id} className="prayer-wrapper">
            <h2>{prayer.prayer_date}</h2>
            <h3>{prayer.prayer_name_opening}</h3>
            <h3>{prayer.prayer_name_closing}</h3>
            <Link to={`edit/${prayer.prayer_id}`}>
              <button>Edit</button>
            </Link>
            {/* onClick={editPrayerRoute} */}
          </div>
        );
      })}
    </div>
  );
};

export default AllPrayers;

//onclick of edit - open the add prayers form -
//fill the form with existing values
//on submit it should put request
