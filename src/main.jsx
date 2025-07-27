import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./components/App";
// TODO: import all components or pages whichever you'd like depending on the file structure you go with
// Auth
import Auth from "./components/Auth/Auth";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
// ** CommonUI not needed here **
// Dashboard
import Dashboard from "./components/Dashboard/Dashboard";
import ExerciseOverview from "./components/Dashboard/ExerciseOverview";
import NutritionOverview from "./components/Dashboard/NutritionOverview";
// Exercise
import Exercise from "./components/Exercise/Exercise";
import ExerciseID from "./components/Exercise/ExerciseID";
import Workout from "./components/Exercise/Workout";
// Home
import Home from "./components/Home/Home";
// Nutrition
import Meal from "./components/Nutrition/Meal";
import Nutrition from "./components/Nutrition/Meal";
import NutritionID from "./components/Nutrition/NutritionID";
// Profile
import Goals from "./components/Profile/Goals";
import Profile from "./components/Profile/Profile";
import Settings from "./components/Profile/Settings";

// create the router and then define the pathing
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, 
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'auth',
        element: <Auth />,
        children: [
          { path: 'login', element: <Login /> },
          { path: 'register', element: <Register /> },
        ]
      },
      { path: 'profile', element: <Profile />,
        children: [
          { path: 'goals', element: <Goals /> },
          { path: 'settings', element: <Settings /> },
        ] },
      { path: 'dashboard', element: <Dashboard />
        ,
        children: [
          { path: 'exercise', element: <ExerciseOverview /> },
          { path: 'nutrition', element: <NutritionOverview /> },
        ]
       },
      { path: 'nutrition', element: <Nutrition />,
        children: [
          { path: 'meal', element: <Meal /> },
          { path: 'nutritionid', element: <NutritionID /> },
        ] },
      { path: 'exercise', element: <Exercise />,
        children: [
          { path: 'workout', element: <Workout /> },
          { path: 'exerciseid', element: <ExerciseID /> },
        ] },
    ]
  },
  { path: '*', element: <h1>404 Not Found</h1> }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
