/*
*   commander: server
*   index.js
*
*   The main entry point. Contains express server and routing.
*/

// Config
var path = require("path");
var fs = require("fs");

require("dotenv").config();

var express = require("express");
var port = process.env.port || 4000;
var app = express();
app.use(express.static(path.join(__dirname, "/views")));

// Routing
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/index.html"));
});

// Send command
app.get("/send-command", (req, res) => {
    var command = req.query.cmd;
    fs.writeFileSync(path.join(__dirname, "/command.txt"), command, (err, data) => {
        if (err) { 
            res.sendFile(path.join(__dirname, "/views/error.html"));
        }
        console.log(data);
    });
    res.sendFile(path.join(__dirname, "/views/success.html"));
});

// Start server
app.listen(port, () => {
    console.log("commander server listening at port " + port);
});