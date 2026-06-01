const express = require("express");
const router = express.Router();

router.get("/", (req, res) => res.send("Get all books"));
router.get("/:id", (req, res) => res.send("Get book by id"));
router.post("/", (req, res) => res.send("Create a book"));
router.put("/:id", (req, res) => res.send("Update a book"));
router.delete("/:id", (req, res) => res.send("Delete a book"));

module.exports = router;
