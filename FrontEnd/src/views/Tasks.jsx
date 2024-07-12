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
    try {
      const response = await fetch('http://localhost:4000/tasks');
      const data = await response.json();
      setTasks(data);
    } catch (error) {
      console.error('Error al obtener las tareas:', error);
    }
  };

  const createTask = async (task) => {
    try {
      const response = await fetch('http://localhost:4000/tasks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(task),
      });
      const newTask = await response.json();
      setTasks([...tasks, newTask]);
    } catch (error) {
      console.error('Error al crear la tarea:', error);
    }
  };

  const updateTask = async (updatedTask) => {
    try {
      const response = await fetch(`http://localhost:4000/tasks/${updatedTask.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedTask),
      });
      const data = await response.json();
      setTasks(tasks.map(task => (task.id === data.id ? data : task)));
    } catch (error) {
      console.error('Error al actualizar la tarea:', error);
    }
  };

  const deleteTask = async (id) => {
    try {
      await fetch(`http://localhost:4000/tasks/${id}`, {
        method: 'DELETE',
      });
      setTasks(tasks.filter(task => task.id !== id));
    } catch (error) {
      console.error('Error al eliminar la tarea:', error);
    }
  };

  const handleEdit = (task) => {
    setTaskToEdit(task);
    setView('edit');
  };

  if (view === 'create') {
    return <CrearTask setView={setView} createTask={createTask} />;
  }

  if (view === 'edit') {
    return <UpdateTask setView={setView} taskToEdit={taskToEdit} updateTask={updateTask} />;
  }

  return (
    <>
      <Header />
      <div className="container mx-auto px-4">
        <h1 className="text-2xl font-bold mb-4">Lista de Tareas</h1>
        <button onClick={() => setView('create')} className="bg-blue-500 text-white p-2 rounded mb-4">
          Crear Tarea
        </button>
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
      <Footer />
    </>
  );
};

export default Task;
