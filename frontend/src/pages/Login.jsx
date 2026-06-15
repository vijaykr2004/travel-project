import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import API from "../services/authService";
import toast from "react-hot-toast";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [formData, setFormData] =
    useState({
      email: "",
      password: "",
    });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  const handleSubmit = async (
    e
  ) => {
    e.preventDefault();

    try {
      const { data } =
        await API.post(
          "/auth/login",
          formData
        );

      login(
        data.user,
        data.token
      );

      toast.success(
        "Login Successful"
      );

      if (
        data.user.role ===
        "admin"
      ) {
        navigate("/admin");
      } else {
        navigate(
          "/dashboard"
        );
      }
    } catch (error) {
      toast.error(
        error.response?.data
          ?.message ||
          "Login Failed"
      );
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">

      <form
        onSubmit={
          handleSubmit
        }
        className="bg-white shadow-lg p-8 rounded-lg w-full max-w-md"
      >
        <h2 className="text-3xl font-bold text-center mb-6">
          Login
        </h2>

        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full border p-3 mb-4 rounded"
          onChange={
            handleChange
          }
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full border p-3 mb-4 rounded"
          onChange={
            handleChange
          }
        />

        <button className="w-full bg-blue-600 text-white p-3 rounded">
          Login
        </button>

        <p className="mt-4 text-center">
          No Account?{" "}
          <Link
            to="/register"
            className="text-blue-600"
          >
            Register
          </Link>
        </p>
      </form>

    </div>
  );
};

export default Login;