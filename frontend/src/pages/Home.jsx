import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { useEffect, useState } from "react";
import { getPackages } from "../services/packageService";

const Home = () => {
const [packages, setPackages] = useState([]);

useEffect(() => {
  const fetchPackages = async () => {
    try {
      const res = await getPackages();
      console.log("API Response:", res.data);
      setPackages(res.data.packages);
    } catch (error) {
      console.log(error);
    }
  };

  fetchPackages();
}, []);


  return (
    
    <div>

      <section className="bg-linear-to-r from-blue-700 via-cyan-600 to-teal-500 text-white h-screen flex items-center">

        <div className="container mx-auto text-center">

          <h1 className="text-6xl font-bold">
            Explore India With Confidence
          </h1>

          <p className="text-xl mt-6">
            Discover unforgettable destinations and amazing experiences.
          </p>

          <Link to="/packages">
            <button className="mt-8 bg-white text-blue-700 px-8 py-4 rounded-lg font-bold">
              Explore Packages
            </button>
          </Link>
          <Link to="/inquiry">
            <button className="bg-orange-500 hover:bg-orange-600 mx-3 text-white px-8 py-4 rounded-lg font-semibold">
              Send Inquiry
            </button>
          </Link>
         

          

        </div>

      </section>

      {/* <section className="container mx-auto py-20">

        <h2 className="text-4xl font-bold text-center mb-10">
          Popular Destinations
        </h2>

        <div className="grid md:grid-cols-4 gap-6">

          {[
            "Kashmir",
            "Manali",
            "Goa",
            "Rajasthan",
          ].map((item) => (
            <div
              key={item}
              className="shadow-lg rounded-lg p-6 text-center hover:scale-105 transition"
            >
              <h3 className="text-2xl font-bold">
                {item}
              </h3>
            </div>
          ))}

        </div>

      </section> */}
      <section className="container mx-auto py-20">

  <h2 className="text-4xl font-bold text-center mb-10">
    Popular Packages
  </h2>
  <div className="grid md:grid-cols-4 gap-6">

    {/* {packages.slice(0, 4).map((pkg) => ( */}
    {(packages || []).slice(0, 4).map((pkg) => (
      <div
        key={pkg._id}
        className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transition"
      >

        <img
          src={pkg.image}
          alt={pkg.title}
          className="h-48 w-full object-cover"
        />

        <div className="p-4">

          <h3 className="text-xl font-bold">
            {pkg.title}
          </h3>

          <p className="text-gray-600">
            📍 {pkg.destination}
          </p>

          <p className="font-semibold text-green-600 mt-2">
            ₹{pkg.price}
          </p>

          <Link to={`/packages/${pkg._id}`}>
            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">
              View Package
            </button>
          </Link>

        </div>

      </div>
    ))}

  </div>

     </section>

      <section className="bg-gray-100 py-20">

        <div className="container mx-auto">

          <h2 className="text-4xl font-bold text-center mb-10">
            Why Choose Us
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="bg-white p-6 rounded shadow">
              <h3 className="text-xl font-bold">
                Best Packages
              </h3>
              <p>
                Affordable and customized travel plans.
              </p>
            </div>

            <div className="bg-white p-6 rounded shadow">
              <h3 className="text-xl font-bold">
                Trusted Service
              </h3>
              <p>
                Thousands of happy customers.
              </p>
            </div>

            <div className="bg-white p-6 rounded shadow">
              <h3 className="text-xl font-bold">
                24/7 Support
              </h3>
              <p>
                Dedicated customer support team.
              </p>
            </div>

          </div>

        </div>

      </section>

      <section className="container mx-auto py-20">

        <h2 className="text-4xl font-bold text-center mb-10">
          Customer Reviews
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="shadow-lg p-6 rounded"
            >

              <div className="flex gap-1 text-yellow-500 mb-4">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              <p>
                Amazing travel experience.
                Highly recommended.
              </p>

            </div>
          ))}

        </div>

      </section>

      <a
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-5 right-5 bg-green-500 text-white px-5 py-3 rounded-full shadow-lg"
      >
        WhatsApp
      </a>

    </div>
  );
};

export default Home;