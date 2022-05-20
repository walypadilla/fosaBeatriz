const express = require('express');

const router = express.Router();

const HomeController = require('../controllers/home.controller');

router.get('/', HomeController.getIndex);
router.get('/servicios', HomeController.getServices);
router.get('/contacto', HomeController.getContact);
router.post('/contacto', HomeController.postSendEmail);

module.exports = router;
