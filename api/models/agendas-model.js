const db = require('../database/db-config');

function getAllAgendas(){
    return db('agendas')
}

function getAgendaById(id){
    return db('agendas').where('agenda_id', id).first()
}

async function addAgenda(agenda) {
    const [agenda_id] = await db('agendas')
        .insert(agenda)
    return getAgendaById(agenda_id)
}

module.exports = {
    getAllAgendas,
    getAgendaById,
    addAgenda,
}