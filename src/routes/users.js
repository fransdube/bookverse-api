const express = require("express");
const router = express.Router();

router.get("/", (req, res) => res.send("Get all users"));
router.get("/:id", (req, res) => res.send("Get user by id"));
router.post("/", (req, res) => res.send("Create a user"));
router.put("/:id", (req, res) => res.send("Update a user"));
router.delete("/:id", (req, res) => res.send("Delete a user"));

module.exports = router;
