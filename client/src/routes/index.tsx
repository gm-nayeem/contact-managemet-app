import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Home from "../pages/home/Home";
import Error from "../pages/error/Error";
import Navbar from "../components/navbar/Navbar";
import AddContact from "../pages/addContact/AddContact";
import AllContact from "../pages/allContact/AllContact";

const Index = () => {
  const Layout = () => {
    return (
      <div className="layout">
        <Navbar />
        <main>
          <Outlet />
        </main>
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/new-contact",
          element: <AddContact />,
        },
        {
          path: "/contacts",
          element: <AllContact />,
        },
        {
          path: "/*",
          element: <Error />,
        },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default Index;
