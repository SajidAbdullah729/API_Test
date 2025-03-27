const express = require("express");
const { getUsers, createUser, updateUser, deleteUser } = require("../controllers/userController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

router.get("/", getUsers);
router.post("/", authMiddleware, createUser);
router.patch("/:id", authMiddleware, updateUser);
router.delete("/:id", authMiddleware, deleteUser);

module.exports = router;
