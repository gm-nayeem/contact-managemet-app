const router = require("express").Router();
const {
    createContact,
    updateContact,
    deleteContact,
    getSingleContact,
    getAllContact
} = require('../controllers/contactController');

router.post('/', createContact);
router.put('/:id', updateContact);
router.delete('/:id', deleteContact);
router.get('/single:id', getSingleContact);
router.get('/', getAllContact);

module.exports = router;