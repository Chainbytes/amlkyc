var client = require('blockscore')(process.env.BLOCKSCORE_API_KEY);

var Company = {  
    getAll: function(callback) {  
        return client.companies.list({}, callback);
    },  
    getById: function(id, callback) {  
        return client.companies.retrieve(id, callback);
    }, 
    add: function(body, callback) {  
        return client.companies.create(body, callback);
    }
};

module.exports = Company;  