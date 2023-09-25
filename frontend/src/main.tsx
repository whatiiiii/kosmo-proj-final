import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./components/App.tsx";
import "bootstrap/dist/css/bootstrap.min.css";
//import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TestPage from "./components/TestPage.tsx";
import ErrorPage from "./components/ErrorPage.tsx";
import OmokBoard from "./components/OmokBoard.tsx";
import ButtonFriend from "./components/ButtonFriend.tsx";
import Clock from "./components/Clock.jsx";
<<<<<<< HEAD
import PinLayout from "./components/Pinlayout.tsx";
import Imageprac from "./components/Imageprac.tsx";
=======
import PinLayout from "./components/PinLayout.tsx";
import MainPage from "./components/MainPage.tsx";
import Feed from "./components/Feed.tsx";
>>>>>>> 1e57e700e9976e6534b3671bb3ecc49fce2ed97e

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <MainPage />,
      errorElement: <ErrorPage />,
    },
    {
      path: "test",
      element: <TestPage />,
    },
    {
      path: "omok",
      element: <OmokBoard />,
    },
    {
      path: "clock",
      element: <Clock />,
    },
    {
      path: "button",
      element: <ButtonFriend />,
    },
    {
      path: "pin",
      element: <PinLayout />,
    },
    {
<<<<<<< HEAD
      path: "image",
      element: <Imageprac />,
=======
      path: "feed",
      element: <Feed />,
>>>>>>> 1e57e700e9976e6534b3671bb3ecc49fce2ed97e
    },
  ],
  { basename: "/" },
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
