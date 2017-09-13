var client = require('blockscore')(process.env.BLOCKSCORE_API_KEY);

var People = {  
    getAllPeople: function(callback) {  
        return client.people.list({}, callback);
    },  
    getPeopleById: function(id, callback) {  
        return client.people.retrieve(id, callback);
    }, 
    addPeople: function(body, callback) {  
        return client.people.create(body, callback);
    }
};

module.exports = People;  