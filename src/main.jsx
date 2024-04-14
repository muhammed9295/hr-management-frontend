import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  
} from "react-router-dom";
import Layout from "./Layout.jsx";
import Dashboard from "./pages/Dashboard";
import Employes from "./pages/Employes";
import AddEmployee from "./pages/AddEmployee";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import UserProfile from "./pages/UserProfile";
import ProtectedRoute from "./components/ProtectedRoute";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={ <Layout />}>
      <Route
        path="dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="employes"
        element={
          <ProtectedRoute>
            <Employes />
          </ProtectedRoute>
        }
      />
      <Route
        path="add-employee"
        element={
          <ProtectedRoute>
            <AddEmployee />
          </ProtectedRoute>
        }
      />
      <Route path="registration" element={<Registration />} />
      <Route path="login" element={<Login />} />
      <Route
        path="profile/:id"
        element={
          <ProtectedRoute>
            <UserProfile />
          </ProtectedRoute>
        }
      />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <div>
    <RouterProvider router={router} />
  </div>
);
