import { useEffect, useState } from "react";
import API from "../../services/authService";

const Dashboard = () => {
  const [analytics, setAnalytics] =
    useState(null);

  useEffect(() => {
    fetchAnalytics();
  }, []);

  const fetchAnalytics =
    async () => {
      try {
        const token =
          localStorage.getItem(
            "token"
          );

        const res =
          await API.get(
            "/admin/dashboard",
            {
              headers: {
                Authorization:
                  `Bearer ${token}`,
              },
            }
          );

        setAnalytics(
          res.data.analytics
        );
      } catch (error) {
        console.log(error);
      }
    };

  return (
    <div className="container mx-auto p-10">

      <h1 className="text-4xl font-bold mb-6">
        Admin Dashboard
      </h1>

      <div className="grid md:grid-cols-4 gap-5">

        <div className="bg-white p-5 rounded shadow">
          <h3>
            Users
          </h3>
          <p className="text-3xl">
            {
              analytics?.totalUsers
            }
          </p>
        </div>

        <div className="bg-white p-5 rounded shadow">
          <h3>
            Packages
          </h3>
          <p className="text-3xl">
            {
              analytics?.totalPackages
            }
          </p>
        </div>

        <div className="bg-white p-5 rounded shadow">
          <h3>
            Inquiries
          </h3>
          <p className="text-3xl">
            {
              analytics?.totalInquiries
            }
          </p>
        </div>

        <div className="bg-white p-5 rounded shadow">
          <h3>
            Revenue
          </h3>
          <p className="text-3xl">
            ₹
            {
              analytics?.totalRevenue
            }
          </p>
        </div>

      </div>

    </div>
  );
};

export default Dashboard;