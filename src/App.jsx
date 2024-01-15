import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Booking from "./pages/booking/Booking";
import './styles/global.scss';

function App() {
  const Layout = () => {
    return (
      <div className='main'>
        <Navbar />
        <div className='container'>
          <Outlet />
        </div>
        <Footer />
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/booking',
          element: <Booking />
        },
        {
          path: '/footer',
          element: <Footer />
        },
      ]
    },
  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App;