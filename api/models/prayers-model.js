const db = require('../database/db-config');

function getAllPrayers(){
    return db('prayers')
}

function getPrayerById(id){
    return db('prayers').where('prayer_id', id).first()
}

async function addPrayer(prayer) {
    const [prayer_id] = await db('prayers')
        .insert(prayer)
    return getPrayerById(prayer_id)
}

module.exports = {
    getAllPrayers,
    getPrayerById,
    addPrayer,
}