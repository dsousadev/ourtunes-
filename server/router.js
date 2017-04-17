const controller = require('./controller/controller.js')
const router = require('express').Router();

router.get('/songs', controller.get);
router.post('/songs', controller.post);

module.exports = router;
