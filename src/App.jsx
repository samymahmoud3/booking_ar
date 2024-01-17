import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Booking from "./pages/booking/Booking";
import './styles/global.scss';
import Blogs from "./pages/blogs/Blogs";
import Blog from "./pages/blog/Blog";
import Partner from "./pages/partner/Partner";
import TravelPartners from "./pages/travelPartners/TravelPartners";
import PartnerDetails from "./pages/partnerDetails/PartnerDetails";

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
          path: '/travel-partners',
          element: <TravelPartners />
        },
        {
          path: '/partner',
          element: <Partner />
        },
        {
          path: '/partner-details',
          element: <PartnerDetails />
        },
        {
          path: '/blogs',
          element: <Blogs />
        },
        {
          path: '/blogs/:id',
          element: <Blog />
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