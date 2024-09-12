
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PageNotFound from "./pages/PageNotFound";
import ResearchPage from "./pages/ResearchPage";
import ContactPage from "./pages/ContactPage";
import PeoplePage from "./pages/PeoplePage";
import AnnouncementPage from "./pages/AnnouncementPage";

import { RouteContextProvider } from "./store/RouteContextProvider";

import './App.css';

import LandingPage from "./pages/LandingPage";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />,
      errorElement: <PageNotFound />
    },   
  
    {
      path: "/research",
      element: <ResearchPage />,
      errorElement: <PageNotFound />
    },
    {
      path: "/contact",
      element: <ContactPage />,
      errorElement: <PageNotFound />
    },
    {
      path: "/people",
      element: <PeoplePage />,
      errorElement: <PageNotFound />
    },
    {
      path: "/announcement",
      element: <AnnouncementPage />,
      errorElement: <PageNotFound />
    },
  ]);


  return (
    <RouteContextProvider>
      <RouterProvider router={router} />
    </RouteContextProvider>
    // <LandingPage/>
  )
}

export default App

