var express = require('express');  
var router = express.Router();  

var Company = require('../models/Company');  
router.get('/:id?', function(req, res, next) {  
    if (req.params.id) {  
        Company.getById(req.params.id, function(err, rows) {  
            if (err) {  
                res.json(err);  
            } else {  
                res.json(rows);  
            }  
        });  
    } else {  
        Company.getAll(function(err, rows) {  
            if (err) {  
               res.json(err);
            } else {  
                res.json(rows);  
            }  
        });  
    }  
});  
router.post('/', function(req, res, next) {  
    Company.add(req.body, function(err, count) {  
        if (err) {  
            res.json(err);  
        } else {  
            res.json(req.body);  
        }  
    });  
});  

module.exports = router;