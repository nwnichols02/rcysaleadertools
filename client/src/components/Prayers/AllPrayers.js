import React from 'react';

const AllPrayers = (props) => {
  return (
    <div>
              {props.allPrayers.map(prayer => {
          return(
            <div key={prayer.prayer_id} className="prayer-wrapper">
              <h2>{prayer.prayer_date}</h2>
              <h3>{prayer.prayer_name_opening}</h3>
              <h3>{prayer.prayer_name_closing}</h3>
            </div>
          )
        })}
    </div>
  )
}

export default AllPrayers;