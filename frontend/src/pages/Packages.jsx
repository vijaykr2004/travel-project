import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getPackages } from "../services/packageService";

const Packages = () => {
  const [packages, setPackages] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const res = await getPackages();

        setPackages(res.data.packages || []);
      } catch (error) {
        console.error(
          "Error fetching packages:",
          error
        );
      } finally {
        setLoading(false);
      }
    };

    fetchPackages();
  }, []);

  const filteredPackages =
    packages.filter((item) =>
      item.destination
        ?.toLowerCase()
        .includes(search.toLowerCase())
    );

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <h2 className="text-2xl font-semibold">
          Loading Packages...
        </h2>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-4xl font-bold text-center mb-8">
        Tour Packages
      </h1>

      <div className="max-w-xl mx-auto mb-10">
        <input
          type="text"
          placeholder="Search Destination..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {filteredPackages.length === 0 ? (
        <div className="text-center">
          <h2 className="text-xl text-gray-500">
            No packages found.
          </h2>
        </div>
      ) : (
        <div className="grid md:grid-cols-3 gap-6">
          {filteredPackages.map((pkg) => (
            <div
              key={pkg._id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300"
            >
              <img
                src={
                  pkg.image ||
                  "https://via.placeholder.com/400x250"
                }
                alt={pkg.title}
                className="h-56 w-full object-cover"
              />

              <div className="p-5">
                <h2 className="text-2xl font-bold mb-2">
                  {pkg.title}
                </h2>

                <p className="text-gray-600 mb-2">
                  📍 {pkg.destination}
                </p>

                <p className="text-gray-500 mb-2">
                  ⏳ {pkg.duration}
                </p>

                <p className="text-green-600 font-bold text-lg">
                  ₹{pkg.price}
                </p>

                <Link
                  to={`/packages/${pkg._id}`}
                >
                  <button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Packages;