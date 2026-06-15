import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Inquiry from "./pages/Inquiry";

import Home from "./pages/Home";
import About from "./pages/About";
import Packages from "./pages/Packages";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import PackageDetails from "./pages/PackageDetails";

import Login from "./pages/Login";
import Register from "./pages/Register";

import PrivateRoute from "./components/PrivateRoute";

import UserDashboard from "./pages/user/Dashboard";

import AdminDashboard from "./pages/admin/Dashboard";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/about"
          element={<About />}
        />
        <Route
  path="/packages/:id"
  element={<PackageDetails />}
/>

        <Route
          path="/packages"
          element={<Packages />}
        />
        <Route
  path="/inquiry"
  element={<Inquiry />}
/>

        <Route
          path="/contact"
          element={<Contact />}
        />

        <Route
          path="/faq"
          element={<FAQ />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

        <Route
          element={
            <PrivateRoute />
          }
        >
          <Route
            path="/dashboard"
            element={
              <UserDashboard />
            }
          />

          <Route
            path="/admin"
            element={
              <AdminDashboard />
            }
          />
        </Route>

      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App;