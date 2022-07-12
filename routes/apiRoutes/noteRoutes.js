const { findById, createNewNote, validateNote } = require('../../lib/notes');
const { notes } = require('../../db/db.json');
const router = require('express').Router();

router.get('/notes', (req, res) => {
    let results = notes;
    console.log((notes));
    res.json(results);
})

router.get('/notes/:id', (req, res) => {
    const result = findById(req.params.id, animals)
    if (result) {
        res.json(result);
    } else {
        res.sendStatus(404)
    }
})

router.post('/notes', (req, res) => {
    req.body.id = notes.length.toString();

    if (!validateNote(req.body)) {
        res.status(400).send('The animal is not properly formatted.')
    } else {
        const note = createNewNote(req.body, notes)
        res.json(animal)
    }
})

module.exports = router;