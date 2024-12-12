import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import Home from "../pages/home/Home"; // Added this import
import Login from "../pages/login/Login";
import Signup from "../pages/signup/Signup";
import ChatBox from "../pages/chatbox/ChatBox";
import Profile from "../pages/profile/Profile";
import Nav from "../components/nav/Nav";
import LeftBar from "../components/leftbar/LeftBar";
import RightBar from "../components/rightbar/RightBar";

export default function LayOut() {
  const Feed = () => {
    return (
      <>
        <Nav />
        <main>
          <LeftBar />
          <div className="container">
            <Outlet /> {/* Renders nested routes */}
          </div>
          <RightBar />
        </main>
      </>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Feed />, // Layout for nested routes
      children: [
        { path: "/", element: <Home /> }, // Root page
        { path: "/profile/:id", element: <Profile /> }, // Profile page
        { path: "/chatbox/:id", element: <ChatBox /> }, // ChatBox page
      ],
    },
    {
      path: "/login",
      element: <Login />, // Login page
    },
    {
      path: "/signup",
      element: <Signup />, // Signup page
    },
  ]);

  return <RouterProvider router={router} />;
}
