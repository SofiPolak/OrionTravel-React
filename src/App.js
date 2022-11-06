import './App.css';
import React, { useContext } from "react";
import { Routes, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { AuthProvider } from './context/Auth';
import { AuthContext } from "./context/Auth";
import { Navigate } from "react-router-dom";
import { Datos } from './components/Dashboard';

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Datos />
              </ProtectedRoute>
          }
        />
      </Routes>
    </AuthProvider>
  );
}


export const ProtectedRoute = ({ children }) => {

  const { isSigned } = useContext(AuthContext);

  if (!isSigned) {
    // user is not authenticated
    return <Navigate to="/" />;
  }
  return children;
};



export default App;
