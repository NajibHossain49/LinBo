import * as React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import HomePage from "../Pages/HomePage";
import LearnPage from "../Pages/LearnPage";
import AboutUs from "../Pages/AboutUs";
import TutorialPage from "../Pages/TutorialPage";
import LessonDetail from "../Pages/LessonDetail";
import LoginPage from "../Authentication/LoginPage";
import RegistrationForm from "../Authentication/RegistrationForm";
import ForgotPassword from "../Authentication/ForgotPassword";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../Pages/ErrorPage";
import MyProfile from "../Pages/MyProfile";
import UpdateProfile from "../Pages/UpdateProfile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/start-learning",
        element: <LearnPage />,
      },
      {
        path: "/lesson/:lessonNo", // Private Route
        element: (
          <PrivateRoute>
            <LessonDetail />
          </PrivateRoute>
        ),
      },
      {
        path: "/tutorials", // Private Route
        element: (
          <PrivateRoute>
            <TutorialPage />
          </PrivateRoute>
        ),
        loader: () =>
          fetch("/videoLinks.json")
            .then((response) => response.json())
            .then((data) => ({ videoLinks: data })),
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/my-profile", // Private Route
        element: (
          <PrivateRoute>
            <MyProfile />
          </PrivateRoute>
        ),
      },
      {
        path: "/update-profile", // Private Route
        element: (
          <PrivateRoute>
            <UpdateProfile />
          </PrivateRoute>
        ),
      },

      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegistrationForm />,
      },
    ],
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

export default router;
