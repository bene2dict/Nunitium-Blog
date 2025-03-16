import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "./layout/appLayout/Layout"
import About from "./pages/about/About"
import Home from "./pages/home/Home"
import Login from "./pages/login/Login"
import Signup from "./pages/register/Signup"
import Article from "./pages/article/Article"
import Articles from "./pages/articles/Articles"
import Dashboard from "./pages/dashboard/Dashboard"
import Profile from "./pages/profile/Profile"
import Settings from "./pages/settings/Settings"
import CreateArticle from "./pages/create_article/CreateArticle"
import '@fontsource/material-symbols-outlined';
import PrivateLayout from "./layout/protectedLayout/privateLayout"
import EditArticle from "./pages/editArticle/EditArticle"




function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Signup />
        },
        {
          path: "/articles/:id",
          element: <Article />
        },
        {
          path: "/articles",
          element: <Articles />
        }
      ]
    },
    {
      path: "/",
      element: <PrivateLayout />,
      children: [
        {
          path: "/profile",
          element: <Profile />
        },
        {
          path: "/settings",
          element: <Settings />
        },
        {
          path: "/dashboard",
          element: <Dashboard />
        },
        {
          path: "/create-article",
          element: <CreateArticle />
        },
        {
          path: "/edit-article/:id",
          element: <EditArticle />
        },
      ]
    }
  ])

  return (

    <RouterProvider router={router} />
  )
}

export default App
