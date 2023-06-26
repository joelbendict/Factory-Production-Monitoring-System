const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  // Define the properties of the Task model
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  // Add more properties as needed
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
