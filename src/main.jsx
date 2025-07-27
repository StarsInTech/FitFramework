import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import App from "./components/App";
// TODO: import all components or pages whichever you'd like depending on the file structure you go with
// Auth
import Auth from "./components/Auth/Auth";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
// CommonUI

// Dashboard
import Dashboard from "./components/Dashboard/Dashboard";
import ExerciseOverview from "./components/Dashboard/ExerciseOverview";
import NutritionOVeview from "./components/Dashboard/NutritionOverview";
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




// create the router
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  }
]);


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
