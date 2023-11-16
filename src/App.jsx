import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route, Navigate } from "react-router-dom";

import Layout from "./components/layouts/Layout";
import Inicio from "./pages/Inicio";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* //========================= Rutas publicas */}
      <Route path={"/"} element={<Layout />}>
        <Route index element={<Inicio />} />
      </Route>
    </>
  )
);

function App() {
  return <>{<RouterProvider router={router} />}</>;
}

export default App;
