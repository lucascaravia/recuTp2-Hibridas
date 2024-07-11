import React, { useState, useEffect } from 'react';

const UpdateTask = ({ setView, taskToEdit, setTasks, tasks }) => {
  const [editTask, setEditTask] = useState({ ...taskToEdit });

  const updateTask = () => {
    setTasks(tasks.map(task => (task.id === editTask.id ? editTask : task)));
    setView('list');
  };

  return (
    <div className="bg-gradient-to-br from-gray-500 to-emerald-700 h-screen flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Editar Tarea</h1>
        <input
          type="text"
          placeholder="Título"
          value={editTask.title}
          onChange={(e) => setEditTask({ ...editTask, title: e.target.value })}
          className="border-2 border-teal-800 px-4 py-2 mb-4 w-full rounded-lg focus:outline-none focus:border-teal-500"
        />
        <textarea
          placeholder="Descripción"
          value={editTask.description}
          onChange={(e) => setEditTask({ ...editTask, description: e.target.value })}
          className="border-2 border-teal-800 px-4 py-2 mb-4 w-full rounded-lg h-32 resize-none focus:outline-none focus:border-teal-500"
        />
        <input
          type="date"
          value={editTask.dueDate}
          onChange={(e) => setEditTask({ ...editTask, dueDate: e.target.value })}
          className="border-2 border-teal-800 px-4 py-2 mb-4 w-full rounded-lg focus:outline-none focus:border-teal-500"
        />
        <select
          value={editTask.priority}
          onChange={(e) => setEditTask({ ...editTask, priority: e.target.value })}
          className="border-2 border-teal-800 px-4 py-2 mb-4 w-full rounded-lg focus:outline-none focus:border-teal-500"
        >
          <option value="Alta">Alta</option>
          <option value="Media">Media</option>
          <option value="Baja">Baja</option>
        </select>
        <div className="flex justify-center">
          <button onClick={updateTask} className="bg-teal-500 text-white px-6 py-3 rounded-full focus:outline-none hover:bg-teal-600">Guardar Cambios</button>
          <button onClick={() => setView('list')} className="bg-orange-500 text-white px-6 py-3 ml-4 rounded-full focus:outline-none hover:bg-orange-600">Cancelar</button>
        </div>
      </div>
    </div>
  );
  
  
  
  
  
  
};

export default UpdateTask;
