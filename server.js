const express = require("express");
const app = express();
// test
app.get("/", function(request, response) {
  response.sendFile(__dirname + "/views/index.html");
});

app.get("/aboutme", function(request, response) {
  response.sendFile(__dirname + "/views/aboutme.html");
});

app.get("/aboutme2", function(request, response) {
  response.sendFile(__dirname + "/views/aboutme2.html");
});

app.get("/aboutme3", function(request, response) {
  response.sendFile(__dirname + "/views/aboutme3.html");
});


// listen for requests :)
const listener = app.listen(process.env.PORT, function() {
  console.log("Your app is listening on port " + listener.address().port);
});



