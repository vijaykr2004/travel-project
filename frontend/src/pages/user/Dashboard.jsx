import { useEffect, useState } from "react";
import API from "../../services/authService";

const Dashboard = () => {
  const [data, setData] =
    useState(null);

  useEffect(() => {
    fetchDashboard();
  }, []);

  const fetchDashboard =
    async () => {
      try {
        const token =
          localStorage.getItem(
            "token"
          );

        const res =
          await API.get(
            "/user/dashboard",
            {
              headers: {
                Authorization:
                  `Bearer ${token}`,
              },
            }
          );

        setData(
          res.data.data
        );
      } catch (error) {
        console.log(error);
      }
    };

  return (
    <div className="container mx-auto p-10">

      <h1 className="text-4xl font-bold mb-6">
        User Dashboard
      </h1>

      <div className="grid md:grid-cols-3 gap-5">

        <div className="bg-white p-5 rounded shadow">
          <h3>
            Total Inquiries
          </h3>
          <p className="text-3xl">
            {
              data?.totalInquiries
            }
          </p>
        </div>

        <div className="bg-white p-5 rounded shadow">
          <h3>
            Total Payments
          </h3>
          <p className="text-3xl">
            {
              data?.totalPayments
            }
          </p>
        </div>

        <div className="bg-white p-5 rounded shadow">
          <h3>
            Total Spent
          </h3>
          <p className="text-3xl">
            ₹
            {
              data?.totalSpent
            }
          </p>
        </div>

      </div>

    </div>
  );
};

export default Dashboard;