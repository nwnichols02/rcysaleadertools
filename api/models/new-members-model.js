const db = require('../database/db-config');

function getAllNewMembers(){
    return db('new_members')
}

function getNewMemberById(id){
    return db('new_members').where('new_member_id', id).first()
}

async function addNewMember(newMember) {
    const [new_member_id] = await db('new_members')
        .insert(newMember)
    return getNewMemberById(new_member_id)
}

function deleteNewMember(id) {
    return db('new_members').where('new_member_id', id).del();
}

module.exports = {
    getAllNewMembers,
    getNewMemberById,
    addNewMember,
    deleteNewMember
}