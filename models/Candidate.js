var client = require('blockscore')(process.env.BLOCKSCORE_API_KEY);

var Candidate = {  
    getAll: function(callback) {  
        return client.candidates.list({}, callback);
    },  
    getById: function(id, callback) {  
        return client.candidates.retrieve(id, callback);
    }, 
    add: function(body, callback) {  
        return client.candidates.create(body, callback);
    },
    update: function(id,body, callback) {  
        return client.candidates.update(id, body, callback);
    },
    delete: function(id,callback) {  
        return client.candidates.del(id, callback);
    }
};

module.exports = Candidate;  