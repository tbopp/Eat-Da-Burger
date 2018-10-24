// Dependencies
const express = require("express");
const router = express.Router();

// Import the model (burgers.js) to use its database functions.
const burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
// Get route for all burgers.
router.get("/", (req, res) => {
    burger.all(data => {
        let burgerObj = {
            burgers: data
        };
        console.log(burgerObj);
        res.render("index", burgerObj);
    });
});

// Post route to add a new burger and devoured status 
router.post("/api/burgers", (req, res) => {
    burger.create([
        "burger_name", "devoured"
    ], [
        req.body.burger_name, req.body.devoured
    ], result => {
        res.json({
            id: result.insertId
        });
    });
});

// Put route to update a burger that was devoured
router.put("/api/burgers/:id", (req, res) => {
    let condition = `id = ${req.params.id}`;

    console.log("condition", condition);

    burger.update({
        devoured: req.body.devoured
    }, condition, result => {
        if (result.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

// Export routes for server.js to use.
module.exports = router;