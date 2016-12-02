var express = require('express');
var app = express();
var port = process.env.PORT || 3500;

app.get('/', function(req, res){
    
    var information = {
        "ipaddress": req.headers["x-forwarded-for"],
        "language": req.headers["accept-language"].substring(0,5),
        "software": req.headers["user-agent"]
    }
    
    res.end(JSON.stringify(information, null, 3));
    
});

app.listen(port, function() {
    console.log("Server listening on port " + port);
});