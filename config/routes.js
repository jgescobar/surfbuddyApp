var express = require('express'),
    router  = new express.Router();

// Require controllers.
var pagesController = require('../controllers/pages');
var spotsController = require('../controllers/spots');
// var usersController = require('../controllers/users');

router.post('/api/cspots', spotsController.getCSpots);
router.post('/api/cspotsdeats', spotsController.getCSpotsDeats);

// root path:
// router.get('/', pagesController.welcome);

// navigation resource path:
// router.get('/surf', pagesController.surf);

// // users resource paths:
// router.get('/users',     usersController.index);
// router.get('/users/:id', usersController.show);

module.exports = router;
