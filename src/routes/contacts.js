const express = require('express');
const router = express.Router();

//Create Contact
router.post('/create', (req, res)=>{
    res.send('Create Contact');
});

//Read Contact
router.get('/get', (req, res)=>{
    res.send('Read Contact');
});

//Update Contact
router.patch('/update', (req, res)=>{
    res.send('Update Contact');
});

//Delete Contact
router.delete('/delete', (req, res)=>{
    res.send('Delete Contact');
});

module.exports = router;