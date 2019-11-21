const express = require('express');
const router = express.Router();
const storeController = require('../controller/storeController')


// Do work here
router.get('/', storeController.homePage);

router.get('/palindrome/:name/', (req, res) => {
  const reverse = [...req.params.name].reverse().join('');
  const palindrome = reverse === req.params.name;
  const obj = { name: req.params.name, reverse, palindrome };

  res.send(obj);
  // res.send(req.params);
  // res.send(req.params.name);
});

router.get('/hello/', (req, res) => {
  res.render('hello', {
    name: 'Rodrigo',
    lastname: 'Viera',
    age: '29',
  });
});

module.exports = router;
