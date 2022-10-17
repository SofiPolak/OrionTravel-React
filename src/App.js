import './App.css';
import React from "react";
import { Routes, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { ListaUsuarios } from './components/Usuarios';
import { DetalleUsuario } from './components/DetalleUsuario';
import { AuthProvider} from './context/Auth';

function App() {
  return (
<AuthProvider>
<Routes>
  <Route path='/' element={<Home />}></Route>
  <Route path='usuarios' element={<ListaUsuarios />}></Route>
  <Route path='usuarios/:usuarioId' element={<DetalleUsuario />}></Route>
</Routes>
</AuthProvider>
  );
}

export default App;
