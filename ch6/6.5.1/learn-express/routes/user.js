const express = require('express');

const router = express.Router();

// GET /user 라우터
router.get('/', (req, res) => {
  res.send('Hello, User');
});

// localhost:5000/user/LHS
router.get('/LHS', (req, res) => {
  res.send('Hello, User LHS');
});
module.exports = router;
