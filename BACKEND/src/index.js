import app from './app.js'
import { connectDB } from './proyecto2db.js' 

connectDB('');
app.listen(4000)

console.log('Server on port', 4000)

app.post('/login', (req, res) => {
    const { email, password } = req.body;
    // Aquí puedes agregar tu lógica de autenticación
    if (email === 'usuario@example.com' && password === 'password123') {
      res.status(200).json({ message: 'Login exitoso', token: 'fake-jwt-token' });
    } else {
      res.status(401).json({ message: 'Credenciales incorrectas' });
    }
  });
  
  app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
  });