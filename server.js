let express = require("express");
let path = require("path");

let port = require("./config").port;
let app = express();
let webpack = require("webpack");
let compression = require("compression");

// app.use(express.static(path.resolve(__dirname, 'dist')));
app.use(compression());
app.use(express.static(path.resolve(__dirname, "dist", "static")));
app.use(express.static(path.resolve(__dirname, "dist", "assets")));

/* app.get("/", function(req, res) {
 *   res.sendFile(path.resolve(__dirname, "dist", "static", "publicHome.html"));
 * });
 */
 
app.get("*", function(req, res) {
  res.sendFile(path.resolve(__dirname, "dist", "index.html"));
});

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log("listening on port " + port);
  }
});
