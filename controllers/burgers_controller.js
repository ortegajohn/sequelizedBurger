var express = require("express");

var router = express.Router();
var db = require("../models");


router.get("/", function(req, res) {

    db.Burgers.findAll({}).then(function(dbBurger) {

      var obj_length = Object.keys(dbBurger);

      var RowDataPacket_container = []
      for(i=0;i<obj_length.length;i++){
        RowDataPacket_container[i] = dbBurger[i].dataValues;
      }
  
      var hbsObject = {
        burgers: RowDataPacket_container
      };
      res.render("index", hbsObject);
    });
  });

  router.put("/api/burger/:id", function(req, res) {

    db.Burgers.update(req.body,
      {
        where: {
          id: req.params.id
        }
      })
      .then(function(dbPost) {
        res.json(dbPost);
      });
  });


  router.post("/api/burger", function(req, res) {

    var test = { 
      burger_name: req.body.burger_name,
      devoured: req.body.devoured
    };
    console.log("test: ",test)
    db.Burgers.create(test).then(function(dbBurgers) {
      res.json(dbBurgers);
    });

  });
  // Export routes for server.js to use.
module.exports = router;

  