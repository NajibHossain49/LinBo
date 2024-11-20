import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./Routers/Router";
import "./index.css";
import AuthProvider from "./contexts/AuthProvider";
import ScrollToTop from "./Utilities/ScrollToTop";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}>
        {/* ScrollToTop inside RouterProvider */}
        <ScrollToTop />
      </RouterProvider>
    </AuthProvider>
  </React.StrictMode>
);