import './styles/index.css'
import React from 'react';
import { Link } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import { AuthProvider } from './context/AuthContext';
function App() {
  return (
    <> 
      
    <Header />

    <AuthProvider>
    <div className="hero min-h-screen bg-gradient-to-r from-gray-800 to-blue-900 bg-cover flex flex-col items-center justify-center py-12">
  <h1 className="text-5xl font-bold text-white mb-8">Bienvenido a tu agenda online </h1>
  <p className="text-xl text-gray-100 text-center px-12 leading-relaxed">podras organizar tus tareas aqui </p>
  <Link to="/tareas"   className="bg-white text-indigo-500 font-bold py-2 px-4 rounded-full shadow-md hover:bg-indigo-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Get Started</Link>
</div>
    </AuthProvider>
    <Footer />
    </>
  );
}

export default App;
