const db = require('../database/db-config');

function getAllTalks(){
    return db('talks')
}

function getTalkById(id){
    return db('talks').where('talk_id', id).first()
}

async function addTalk(talk) {
    const [talk_id] = await db('talks')
        .insert(talk)
    return getTalkById(talk_id)
}

function deleteTalk(id) {
    return db('talks').where('talk_id', id).del();
}

module.exports = {
    getAllTalks,
    getTalkById,
    addTalk,
    deleteTalk
}