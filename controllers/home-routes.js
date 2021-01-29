// This file will contain all of the user-facing routes, such as the homepage and login page.

// the following will set up the main homepage route
const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('homepage');
});

module.exports = router;