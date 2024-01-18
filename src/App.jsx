import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Booking from "./pages/booking/Booking";
import Blogs from "./pages/blogs/Blogs";
import Blog from "./pages/blog/Blog";
import Partner from "./pages/partner/Partner";
import TravelPartners from "./pages/travelPartners/TravelPartners";
import PartnerDetails from "./pages/partnerDetails/PartnerDetails";
import Registration from "./pages/registration/Registration";
import Login from "./pages/login/Login";
import './styles/global.scss';
import Prices from "./pages/prices/Prices";
import Packages from "./pages/packages/Packages";
import ReligiousLandmarks from "./pages/religiousLandmarks/ReligiousLandmarks";
import BookPackage from "./pages/bookPackage/BookPackage";
import BookHotel from "./pages/bookHotel/BookHotel";

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
          path: '/registration',
          element: <Registration />
        },
        {
          path: '/login',
          element: <Login />
        },
        {
          path: '/prices',
          element: <Prices />
        },
        {
          path: '/packages',
          element: <Packages />
        },
        {
          path: '/book-package',
          element: <BookPackage />
        },
        {
          path: '/religious-landmarks',
          element: <ReligiousLandmarks />
        },
        {
          path: '/book-hotel',
          element: <BookHotel />
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