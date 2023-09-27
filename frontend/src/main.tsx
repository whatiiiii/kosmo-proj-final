import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./components/App.tsx";
// import "bootstrap/dist/css/bootstrap.min.css";
//import "./index.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import TestPage from "./components/TestPage.tsx";
import ErrorPage from "./components/ErrorPage.tsx";
import OmokBoard from "./components/OmokBoard.tsx";
import ButtonFriend from "./components/ButtonFriend.tsx";
import Clock from "./components/Clock.jsx";
import PinLayout from "./components/Pinlayout.tsx";
import Imageprac from "./components/Imageprac.tsx";
import MainPage from "./components/MainPage.tsx";
import Feed from "./components/Feed.tsx";
import UserProfile from "./components/UserProfile.tsx";
// import PinBuilder from "./components/PinBuilder.tsx";
import { UserProvider } from "./components/UserProvider.tsx";
import PinBuilder from "./components/PinBuilder.tsx";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: (
        <UserProvider>
          <Outlet />
        </UserProvider>
      ),
      // errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <MainPage />,
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
          path: "image",
          element: <Imageprac />,
        },
        {
          path: "feed",
          element: <Feed />,
        },
        {
          path: "profile",
          element: <UserProfile />,
        },
        {
          path: "pin-builder",
          element: <PinBuilder />,
        },
      ],
    },
  ],
  { basename: "/" },
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
