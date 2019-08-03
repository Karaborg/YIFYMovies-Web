var express = require('express');
var router = express.Router();
const request = require('request');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('detail');
});

router.post('/detail', function (req, res) {
  var data = req.body;
  console.log(data)
  request.get({
    url:data.url,
    json:true
  },function (error, response, body) {
    res.send({success:true,body:body})
  })

});

module.exports = router;
