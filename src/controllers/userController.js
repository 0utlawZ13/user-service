const { v4: uuidv4 } = require('uuid');

let users = [];

// Create a new user
exports.createUser = (req, res) => {
  const { name, email } = req.body;
  const newUser = { id: uuidv4(), name, email };
  users.push(newUser);
  res.status(201).json(newUser);
};

// Get all users
exports.getAllUsers = (req, res) => {
  res.json(users);
};

// Get an user by ID
exports.getUserById = (req, res) => {
  const user = users.find(u => u.id === req.params.id);
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: 'Usuario no encontrado' });
  }
};

// User Update
exports.updateUser = (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;
  const userIndex = users.findIndex(u => u.id === id);
  if (userIndex !== -1) {
    users[userIndex] = { ...users[userIndex], name, email };
    res.json(users[userIndex]);
  } else {
    res.status(404).json({ message: 'Usuario no encontrado' });
  }
};

// User Delete
exports.deleteUser = (req, res) => {
  const userIndex = users.findIndex(u => u.id === req.params.id);
  if (userIndex !== -1) {
    const deletedUser = users.splice(userIndex, 1);
    res.json(deletedUser[0]);
  } else {
    res.status(404).json({ message: 'Usuario no encontrado' });
  }
};
