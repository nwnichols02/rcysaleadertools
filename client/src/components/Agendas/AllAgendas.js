import React from 'react';

const AllAgendas = (props) => {
  return (
    <div>
              {props.allAgendas.map(agenda => {
          return(
            <div key={agenda.agenda_id} className="agenda-wrapper">
              <h2>Date: {agenda.date}</h2>
              <h3>Opening Prayer: {agenda.opening_prayer}</h3>
              <h3>Closing Prayer: {agenda.closing_prayer}</h3>
              <h3>{agenda.opening_hymn}</h3>
              <h3>{agenda.conducting}</h3>
              <h3>{agenda.presiding}</h3>
              <h3>{agenda.releases}</h3>
              <h3>{agenda.callings}</h3>
              <h3>{agenda.new_members}</h3>
              <h3>{agenda.sacrament_hymn}</h3>
              <h3>{agenda.speaker_1}</h3>
              <h3>{agenda.speaker_2}</h3>
              <h3>{agenda.intermediate_hymn}</h3>
              <h3>{agenda.closing_hymn}</h3>
              <h3>{agenda.announcements
              }</h3>
            </div>
          )
        })}
    </div>
  )
}

export default AllAgendas;