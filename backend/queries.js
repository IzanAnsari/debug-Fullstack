// query.js

const express = require('express');
const bodyParser = require('body-parser');
const pool = require('./db'); // Assuming you have a file for database configuration

const getUsers = (request, response) => {
  pool.query('SELECT * FROM users ORDER BY id ASC')
    .then(results => {
      response.status(200).json(results.rows);
    })
    .catch(error => {
      console.error('Error fetching users:', error);
      response.status(500).json({ error: 'Internal server error' });
    });
};

const getUserById = (request, response) => {
  const id = parseInt(request.params.id);
  pool.query('SELECT * FROM users WHERE id = $1', [id])
    .then(results => {
      response.status(200).json(results.rows);
    })
    .catch(error => {
      console.error('Error fetching user by ID:', error);
      response.status(500).json({ error: 'Internal server error' });
    });
};

const createUser = (request, response) => {
  const { name, email } = request.body;
  pool.query('INSERT INTO users (name, email) VALUES ($1, $2) RETURNING id', [name, email])
    .then(result => {
      response.status(201).json({ id: result.rows[0].id, message: 'User added successfully' });
    })
    .catch(error => {
      console.error('Error creating user:', error);
      response.status(500).json({ error: 'Internal server error' });
    });
};

const updateUser = (request, response) => {
  const id = parseInt(request.params.id);
  const { name, email } = request.body;
  pool.query('UPDATE users SET name = $1, email = $2 WHERE id = $3', [name, email, id])
    .then(() => {
      response.status(200).json({ id, message: 'User updated successfully' });
    })
    .catch(error => {
      console.error('Error updating user:', error);
      response.status(500).json({ error: 'Internal server error' });
    });
};

const deleteUser = (request, response) => {
  const id = parseInt(request.params.id);
  pool.query('DELETE FROM users WHERE id = $1', [id])
    .then(() => {
      response.status(200).json({ id, message: 'User deleted successfully' });
    })
    .catch(error => {
      console.error('Error deleting user:', error);
      response.status(500).json({ error: 'Internal server error' });
    });
};

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
