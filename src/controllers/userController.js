const users = require("../data/users");

// GET all users
const getUsers = (req, res) => {
    res.json(users);
};

// POST: Add a new user
const createUser = (req, res) => {
    const { name, email } = req.body;
    if (!name || !email) {
        return res.status(400).json({ error: "Name and email are required" });
    }
    const newUser = { id: users.length + 1, name, email };
    users.push(newUser);
    res.status(201).json(newUser);
};

// PATCH: Update a user
const updateUser = (req, res) => {
    const userId = parseInt(req.params.id);
    const { name, email } = req.body;
    const user = users.find((u) => u.id === userId);
    if (!user) return res.status(404).json({ error: "User not found" });

    if (name) user.name = name;
    if (email) user.email = email;
    res.json(user);
};

// DELETE: Remove a user
const deleteUser = (req, res) => {
    const userId = parseInt(req.params.id);
    const index = users.findIndex((u) => u.id === userId);
    if (index === -1) return res.status(404).json({ error: "User not found" });

    users.splice(index, 1);
    res.json({ message: "User deleted successfully" });
};

module.exports = { getUsers, createUser, updateUser, deleteUser };
