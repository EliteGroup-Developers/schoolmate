import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { AuthProvider } from "./context/AuthProvider";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Register from './Register'
// import Login from './Login'
// import CourseRegistration from './CourseRegistration';
// import MainPage from './MainPage'

// const Router = createBrowserRouter([
//   {
//     path: '/',
//     element: <MainPage />
//   },
//   {
//     path: '/register',
//     element: <Register />,

//   },
//   {
//     path: '/login',
//     element: <Login/>
//   },
//   {
//     path: '/coursereg',
//     element: <CourseRegistration/>
//   },
// ]);

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <App/>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);