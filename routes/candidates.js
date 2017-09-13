var express = require('express');  
var router = express.Router();  

var Candidate = require('../models/Candidate');  
router.get('/:id?', function(req, res, next) {  
    if (req.params.id) {  
        Candidate.getById(req.params.id, function(err, rows) {  
            if (err) {  
                res.json(err);  
            } else {  
                res.json(rows);  
            }  
        });  
    } else {  
        Candidate.getAll(function(err, rows) {  
            if (err) {  
               res.json(err);
            } else {  
                res.json(rows);  
            }  
        });  
    }  
});  
router.post('/', function(req, res, next) {  
    Candidate.add(req.body, function(err, count) {  
        if (err) {  
            res.json(err);  
        } else {  
            res.json(req.body);  
        }  
    });  
});  
router.delete('/:id', function(req, res, next) {  
    Candidate.delete(req.params.id, function(err, count) {  
        if (err) {  
            res.json(err);  
        } else {  
            res.json(count);  
        }  
    });  
});  
router.put('/:id', function(req, res, next) {  
    Candidate.update(req.params.id, req.body, function(err, rows) {  
        if (err) {  
            res.json(err);  
        } else {  
            res.json(rows);  
        }  
    });  
}); 
module.exports = router;