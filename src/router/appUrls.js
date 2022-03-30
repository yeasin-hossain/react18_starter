import Home from "@view/app/Home";
import Login from "@view/auth";

export const appUrls = [
  {
    path: "/login",
    secured: true,
    public: true,
    component: <Login />,
  },
  {
    path: "/",
    secured: true,
    public: false,
    component: <Home />,
  },
];
