const db = require('../database/db-config');

function getAllCallings(){
    return db('callings')
}

function getCallingById(id){
    return db('callings').where('calling_id', id).first()
}

async function addCalling(calling) {
    const [calling_id] = await db('callings')
        .insert(calling)
    return getCallingById(calling_id)
}

function deleteCalling(id) {
    return db('callings').where('calling_id', id).del();
}

module.exports = {
    getAllCallings,
    getCallingById,
    addCalling,
    deleteCalling
}