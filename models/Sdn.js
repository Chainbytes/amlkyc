var db = require('../dbconnection'); //reference of dbconnection.js  
var Sdn = {  
    getAllSdns: function(callback) {  
        return db.query("Select sdn.*, a.address,a.city,a.country,a.add_remarks,alt.name,alt.type,alt.remarks,c.comments  from sdn LEFT JOIN address as a ON sdn.id = a.sdn_id LEFT JOIN alt ON sdn.id = alt.sdn_id LEFT JOIN comment as c  ON sdn.id = c.sdn_id", callback);  
    },  
    getSdnById: function(id, callback) {  
        return db.query("SELECT sdn.*, a.address,a.city,a.country,a.add_remarks,alt.name,alt.type,alt.remarks,c.comments  FROM sdn LEFT JOIN address as a ON sdn.id = a.sdn_id LEFT JOIN alt ON sdn.id = alt.sdn_id LEFT JOIN comment as c  ON sdn.id = c.sdn_id where sdn.id=?", [id], callback);  
    },  
    addSdn: function(Sdn, callback) {  
        return db.query("Insert into sdn values(?,?,?)", [Sdn.Id, Sdn.Title, Sdn.Status], callback);  
    },  
    deleteSdn: function(id, callback) {  
        return db.query("delete from sdn where Id=?", [id], callback);  
    },  
    updateSdn: function(id, Sdn, callback) {  
        return db.query("update sdn set Title=?,Status=? where Id=?", [Sdn.Title, Sdn.Status, id], callback);  
    }  
};  
module.exports = Sdn;  