var xml2js = require('xml2js');
var JSONPath = require("JSONPath");
var CachedFs = require('cachedfs'),
fs = new CachedFs();
var parser = new xml2js.Parser();

var Sdn = {  
    getAllSdns: function(callback) {  
        return query("$.sdnList.sdnEntry",{},callback);
    },  
    getSdnById: function(id, callback) {  
        var sandbox = {
            filter: function (arg) {
                return arg.uid == id;
            }
        }

        return query("$.sdnList.sdnEntry[?(filter(@))]",sandbox,callback);
    }
};

function query(expression,sandbox,callback){
    fs.readFile('sdn.xml', function(err, data) {
        parser.parseString(data, function (err, result) {
         var matches = JSONPath({
            json : result,
            path : expression,
            sandbox :  sandbox
        });
            return callback(err,matches);
        });
    });

}  
module.exports = Sdn;  