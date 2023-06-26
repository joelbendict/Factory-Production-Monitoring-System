const express = require('express');
const router = express.Router();
const Task = require('../models/task');

// Route for creating a new task
router.post('/', async (req, res) => {
  try {
    const task = new Task(req.body);
    await task.save();
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ error: 'Error creating a new task' });
  }
});

// Route for retrieving all tasks
router.get('/', async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ error: 'Error retrieving tasks' });
  }
});

module.exports = router;
