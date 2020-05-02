const express = require('express');

const controller = require('../controller/controller');

const router = express.Router();

router.get('/', controller.getHomePage);
router.post('/', controller.postView);
router.post('/register', controller.postRegister);
router.post('/suggest', controller.postSuggest);

module.exports = router;