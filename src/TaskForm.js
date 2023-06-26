import React, { useState } from 'react';
import api from './api';

const TaskForm = () => {
  const [taskData, setTaskData] = useState({
    title: '',
    description: '',
    dueDate: '',
    status: '',
  });

  const handleChange = (event) => {
    setTaskData({ ...taskData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await api.post('/tasks', taskData);
      // Handle the response (e.g., show success message, update state, etc.)
      console.log('Task created:', response.data);
    } catch (error) {
      // Handle the error (e.g., show error message, log error, etc.)
      console.error('Error creating task:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={taskData.title}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          value={taskData.description}
          onChange={handleChange}
        ></textarea>
      </div>
      <div>
        <label htmlFor="dueDate">Due Date:</label>
        <input
          type="text"
          id="dueDate"
          name="dueDate"
          value={taskData.dueDate}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="status">Status:</label>
        <input
          type="text"
          id="status"
          name="status"
          value={taskData.status}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Create Task</button>
    </form>
  );
};

export default TaskForm;
