var express = require('express');  
var router = express.Router();  

var People = require('../models/People');  
router.get('/:id?', function(req, res, next) {  
    if (req.params.id) {  
        People.getPeopleById(req.params.id, function(err, rows) {  
            if (err) {  
                res.json(err);  
            } else {  
                res.json(rows);  
            }  
        });  
    } else {  
        People.getAllPeople(function(err, rows) {  
            if (err) {  
               res.json(err);
            } else {  
                res.json(rows);  
            }  
        });  
    }  
});  
router.post('/', function(req, res, next) {  
    People.addPeople(req.body, function(err, count) {  
        if (err) {  
            res.json(err);  
        } else {  
            res.json(req.body);  
        }  
    });  
});  

module.exports = router;