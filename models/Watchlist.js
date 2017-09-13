var client = require('blockscore')(process.env.BLOCKSCORE_API_KEY);

var Watchlist = {  
    search: function(body, callback) {  
        return client.watchlists.search(body, callback);
    }
};

module.exports = Watchlist;  