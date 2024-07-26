import { Route, Routes } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import { PublicRoute } from "./PublicRouter";
import AddComunicado from "../pages/AddComunicado";
import AddDistribucion from "../pages/AddDistribucion";
import AddCalendarizacionPage from "../pages/AddCalendarizacionPage";
import AddUserPage from "../pages/AddUserPage";
import ViewReportePage from "../pages/ViewRepotePage";
import RecoverPassPage from "../pages/RecoverPassPage";
import { PrivateRouter } from "./PrivateRouter";
import ValidationPage from "../pages/ValidationPage";
//import Sidebar from "../components/Sidebar";
import HomePage from "../pages/HomePage";
import { Shadow } from "../components/Shadow";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          }
        />

        <Route
          path="Contraseña"
          element={
            <PublicRoute>
              <RecoverPassPage />
            </PublicRoute>
          }
        />

        <Route
          path="validation"
          element={
            <PublicRoute>
              <ValidationPage />
            </PublicRoute>
          }
        />

        <Route
          path="/home"
          element={
            <PrivateRouter>
              <HomePage />
            </PrivateRouter>
          }
        />
        <Route
          path="/Comunicados"
          element={
            <PrivateRouter>
              <AddComunicado />
            </PrivateRouter>
          }
        />
        <Route
          path="/distribucion"
          element={
            <PrivateRouter>
              <AddDistribucion />
            </PrivateRouter>
          }
        />
        <Route
          path="/calendarizacion"
          element={
            <PrivateRouter>
              <AddCalendarizacionPage />
            </PrivateRouter>
          }
        />
        <Route
          path="/User"
          element={
            <PrivateRouter>
              <AddUserPage />
            </PrivateRouter>
          }
        />
        <Route
          path="/Reportes"
          element={
            <PrivateRouter>
              <ViewReportePage />
            </PrivateRouter>
          }
        />

        <Route
          path="/sombra"
          element={
            <PrivateRouter>
              <Shadow/>
            </PrivateRouter>
          }
        />
      </Routes>
    </>
  );
};
