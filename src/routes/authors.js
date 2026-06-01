const express = require("express");
const router = express.Router();

router.get("/", (req, res) => res.send("Get all authors"));
router.get("/:id", (req, res) => res.send("Get author by id"));
router.post("/", (req, res) => res.send("Create an author"));
router.put("/:id", (req, res) => res.send("Update an author"));
router.delete("/:id", (req, res) => res.send("Delete an author"));

module.exports = router;
