const { findById, createNewNote, validateNote, deleteNotebyId } = require('../../lib/notes');
let { notes } = require('../../db/db.json');
const uniqid = require('uniqid')
const router = require('express').Router();

router.get('/notes', (req, res) => {
    let results = notes;
    res.json(results);
})

router.get('/notes/:id', (req, res) => {
    const result = findById(req.params.id, notes)
    if (result) {
        res.json(result);
    } else {
        res.sendStatus(404)
    }
})

router.post('/notes', (req, res) => {
    req.body.id = uniqid();

    if (!validateNote(req.body)) {
        res.status(400).send('The note is not properly formatted.')
    } else {
        const note = createNewNote(req.body, notes)
        res.json(note)
    }
})

router.delete('/notes/:id', (req, res) => {
    const noteId = req.params.id
    notes = deleteNotebyId(noteId, notes);
    res.json(notes)
})

module.exports = router;