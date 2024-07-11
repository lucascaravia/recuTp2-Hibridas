import React, { useState } from 'react';

const CrearTask = ({ setView, setTasks, tasks }) => {
  const [newTask, setNewTask] = useState({ title: '', description: '', dueDate: '', priority: '' });

  const createTask = () => {
    const newTaskWithId = { ...newTask, id: tasks.length + 1 };
    setTasks([...tasks, newTaskWithId]);
    setView('list'); // Cambiamos la vista de nuevo a la lista después de crear la tarea
  };

  return (
    <div className="bg-gradient-to-br from-gray-800 to-blue-800 h-screen flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Crear Tarea</h1>
        <input
          type="text"
          placeholder="Título"
          value={newTask.title}
          onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
          className="border-2 border-gray-800 px-4 py-2 mb-4 w-full rounded-md focus:outline-none focus:border-gray-600"
        />
        <textarea
          placeholder="Descripción"
          value={newTask.description}
          onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
          className="border-2 border-gray-800 px-4 py-2 mb-4 w-full rounded-md h-32 resize-none focus:outline-none focus:border-gray-600"
        />
        <input
          type="date"
          value={newTask.dueDate}
          onChange={(e) => setNewTask({ ...newTask, dueDate: e.target.value })}
          className="border-2 border-gray-800 px-4 py-2 mb-4 w-full rounded-md focus:outline-none focus:border-gray-600"
        />
        <select
          value={newTask.priority}
          onChange={(e) => setNewTask({ ...newTask, priority: e.target.value })}
          className="border-2 border-gray-800 px-4 py-2 mb-4 w-full rounded-md focus:outline-none focus:border-gray-600"
        >
          <option value="">Seleccionar Prioridad</option>
          <option value="Alta">Alta</option>
          <option value="Media">Media</option>
          <option value="Baja">Baja</option>
        </select>
        <div className="flex justify-center">
          <button onClick={createTask} className="bg-green-600 text-white px-6 py-3 rounded-full focus:outline-none hover:bg-green-800">Crear Tarea</button>
          <button onClick={() => setView('list')} className="bg-gray-600 text-white px-6 py-3 ml-4 rounded-full focus:outline-none hover:bg-gray-800">Cancelar</button>
        </div>
      </div>
    </div>
  );
  
  
};

export default CrearTask;
