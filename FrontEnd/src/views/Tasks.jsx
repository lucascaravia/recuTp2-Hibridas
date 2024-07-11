import React, { useState, useEffect } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import CrearTask from './CreateTask';
import UpdateTask from './UpdateTask';


const Task = () => {
  const [tasks, setTasks] = useState([]);
  const [view, setView] = useState('list'); // 'list', 'create', 'edit'
  const [taskToEdit, setTaskToEdit] = useState(null);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const data = [
      { id: 1, title: 'Tarea 1', description: 'Descripción de la tarea 1', dueDate: '2024-07-20', priority: 'Alta' },
      { id: 2, title: 'Tarea 2', description: 'Descripción de la tarea 2', dueDate: '2024-07-21', priority: 'Media' },
      { id: 3, title: 'Tarea 3', description: 'Descripción de la tarea 3', dueDate: '2024-07-22', priority: 'Baja' },
    ];
    setTasks(data);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const handleEdit = (task) => {
    setTaskToEdit(task);
    setView('edit');
  };

  if (view === 'create') {
    return <CrearTask setView={setView} setTasks={setTasks} tasks={tasks} />;
  }

  if (view === 'edit') {
    return <UpdateTask setView={setView} taskToEdit={taskToEdit} setTasks={setTasks} tasks={tasks} />;
  }

  return (
    <>
    <Header/>
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold mb-4">Lista de Tareas</h1>
      <button onClick={() => setView('create')} className="bg-blue-500 text-white p-2 rounded mb-4">Crear Tarea</button>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="py-2 px-4 text-left">Título</th>
              <th className="py-2 px-4 text-left">Descripción</th>
              <th className="py-2 px-4 text-left">Fecha de Vencimiento</th>
              <th className="py-2 px-4 text-left">Prioridad</th>
              <th className="py-2 px-4 text-left">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <tr key={task.id} className="border-b border-gray-200">
                <td className="py-2 px-4">{task.title}</td>
                <td className="py-2 px-4">{task.description}</td>
                <td className="py-2 px-4">{task.dueDate}</td>
                <td className="py-2 px-4">{task.priority}</td>
                <td className="py-2 px-4">
                  <button
                    onClick={() => handleEdit(task)}
                    className="bg-yellow-500 text-white p-2 rounded mr-2"
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => deleteTask(task.id)}
                    className="bg-red-500 text-white p-2 rounded"
                  >
                    Borrar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    <Footer/>
  </>
  );
};

export default Task;