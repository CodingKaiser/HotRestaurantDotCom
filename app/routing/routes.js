var path = require("path");

var waitlist = [];
var reservations = [];

module.exports = function setupRoutes(app, express) {
  console.log(__dirname);
  app.use(express.static('../public'));

  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname,"../public/home.html"));
  })

  app.get("/api/waitlist", function(req, res) {
    return res.json(waitlist);
  });

  app.get("/api/reservations", function(req, res) {
    return res.json(reservations);
  });

  app.post("/api/new", (req,res) => {
    var newReservation = req.body;
    if (reservations.length < 5){
      reservations.push(newReservation);
    } else {
      console.log("You are on a waitlist");
      waitlist.push(newReservation);
    }
    return res.json(newReservation);
  });
};
