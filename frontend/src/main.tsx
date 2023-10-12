import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./components/App.tsx";
// import "bootstrap/dist/css/bootstrap.min.css";
//import "./index.css";
import {
  createBrowserRouter,
  Outlet,
  redirectDocument,
  RouterProvider,
} from "react-router-dom";
import TestPage from "./components/TestPage.tsx";
import OmokBoard from "./components/OmokBoard.tsx";
import ButtonFriend from "./components/ButtonFriend.tsx";
import Clock from "./components/Clock.jsx";
import PinLayout from "./components/Pinlayout.tsx";
import Imageprac from "./components/Imageprac.tsx";
// import MainPage from "./components/MainPage.tsx";
import Feed from "./components/Feed.tsx";
import UserProfile from "./components/UserProfile.tsx";
import MakePin from "./components/MakePin.tsx";
import UserProvider from "./components/UserProvider.tsx";
import PinBuilder from "./components/PinBuilder.tsx";
import SignIn from "./components/SignIn.tsx";
import SignUp from "./components/SignUp.tsx";
import CssBaseline from "@mui/material/CssBaseline";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import theme from "./api/theme.ts";
import ProfileTab from "./components/ProfileTab.tsx";
import ProfileFooter from "./components/ProfileFooter.tsx";
import EditProfilePage from "./components/EditProfilePage.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

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
          element: <TestPage />,
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
          path: "pin-builder",
          element: <PinBuilder />,
        },
        {
          path: "makepin",
          element: <MakePin />,
        },
        {
          path: "signin",
          element: <SignIn />,
        },
        {
          path: "signup",
          element: <SignUp />,
        },
        {
          path: "profiletab",
          element: <ProfileTab />,
        },
        {
          path: "profilefooter",
          element: <ProfileFooter />,
        },
        {
          path: "editprofilepage",
          element: <EditProfilePage />,
        },
        {
          path: "user/:id",
          element: <UserProfile />,
        },
        {
          path: "logout",
          loader: () => {
            localStorage.removeItem("user");
            return redirectDocument("/");
          },
        },
      ],
    },
  ],
  { basename: "/" },
);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </React.StrictMode>,
);
