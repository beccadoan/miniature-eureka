const path = require('path')
const fs = require('fs')

function findById(id, notesArray) {
    const result = notesArray.filter(note => note.id === id)[0];
    return result;
}

function deleteNotebyId(id, notesArray) {
    const newNotesArray = notesArray.filter(note => note.id !== id)
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes: newNotesArray }, null, 2)
    )
    return newNotesArray;
}

function createNewNote(body, notesArray) {
    const note = body;
    notesArray.push(note)
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes: notesArray }, null, 2)
    )
    
    return note;
}

function validateNote(note) {
    if (!note.title || typeof note.title !== 'string'){
        return false;
    }
    if (!note.text || typeof note.text !== 'string'){
        return false;
    }
    return true;
}

module.exports = { findById, createNewNote, validateNote, deleteNotebyId }