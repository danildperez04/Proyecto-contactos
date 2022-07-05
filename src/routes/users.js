const express = require('express');
const contactsRouter = require('./contacts');
const router = express.Router();

router.get('/users', (req, res) => {
    res.json({
        users: 'UserName',
        contactos: [
            {}
        ]
    });
});

//Use contactsRouter for contacts endpoints
router.use('/user/:userId/contacts/:contactsId', contactsRouter);

module.exports = router;