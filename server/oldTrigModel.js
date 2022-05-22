var express = require("express");
//var bodyParser = require("body-parser");
//var os = require("os");
//const path = require("path");

//let hostname = os.hostname();

var app = express();

//app.use(express.static(path.join(__dirname, "build")));

//app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json())
   .use(express.urlencoded({ extended: true }))
app.set("port", 3000);
app.use("/trig-routes", require("./trigModel.mjs"));

// app.use(function (err, req, res, next) {
//     console.error(err.stack);
//     res.status(500);
//     res.send({ Error: "500" });
// });
// app.get("/", (req, res) => {
//     console.log("found this one");
// });
  
// app.get("/*", (req, res) => {
//     res.sendFile(path.join(__dirname, "build", "index.html"));
// });
//${hostname}

app.listen(app.get("port"), function () {
    console.log(`Express started on :${app.get("port")}`);
});