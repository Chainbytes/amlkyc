var express = require('express');  
var router = express.Router();  

var Watchlist = require('../models/Watchlist');  
 
router.post('/search', function(req, res, next) {  
    Watchlist.search(req.body, function(err, count) {  
        if (err) {  
            res.json(err);  
        } else {  
            res.json(req.body);  
        }  
    });  
});  

module.exports = router;