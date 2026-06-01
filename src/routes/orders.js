const express = require("express");
const router = express.Router();

router.get("/", (req, res) => res.send("Get all orders"));
router.get("/:id", (req, res) => res.send("Get order by id"));
router.post("/", (req, res) => res.send("Create an order"));
router.put("/:id", (req, res) => res.send("Update an order"));
router.delete("/:id", (req, res) => res.send("Delete an order"));

module.exports = router;
