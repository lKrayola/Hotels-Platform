var restify = require("restify");
var testDB = require("./db.json");
const corsMiddleware = require("restify-cors-middleware");

function respond(req, res, next) {
  res.send("hello " + req.params.name);
  next();
}
function getHotels(req, res, next) {
  res.send(testDB.Hotels);
  next();
}
function getHotelById(req, res, next) {
  res.send(testDB.Hotels[req]);
  next();
}

const cors = corsMiddleware({
  origins: ["*", "http://localhost:3000/", "https://localhost:3000/"],
  allowHeaders: [
    "X-App-Version",
    "Accept",
    "Accept-Version",
    "Content-Type",
    "Api-Version",
    "Origin",
    "X-Requested-With",
    "Authorization",
    "Access-Control-Allow-Origin",
  ],
  exposeHeaders: [],
  credentials: false,
  allowCredentialsAllOrigins: true,
});

var server = restify.createServer();
server.pre(cors.preflight);
server.use(cors.actual);
server.get("/hello/:name", respond);
server.get("/hotels/", getHotels);
server.get("/hotels/:id", getHotelById);
server.head("/hello/:name", respond);

server.listen(8080, function () {
  console.log("%s listening at %s", server.name, server.url);
});
