import { useEffect, useState } from "react";

import {
  useParams,
} from "react-router-dom";

import {
  getPackageById,
} from "../services/packageService";

import InquiryForm from "../components/InquiryForm";

const PackageDetails = () => {
  const { id } = useParams();

  const [tourPackage,
    setTourPackage] =
    useState(null);

  useEffect(() => {
    fetchPackage();
  }, []);

  const fetchPackage =
    async () => {
      try {
        const res =
          await getPackageById(id);

        setTourPackage(
          res.data.packageData
        );
      } catch (error) {
        console.log(error);
      }
    };

  if (!tourPackage)
    return <h2>Loading...</h2>;

  return (
    <div className="container mx-auto py-10 px-4">

      <img
        src={tourPackage.image}
        alt={tourPackage.title}
        className="w-full h-[500px] object-cover rounded-lg"
      />

      <h1 className="text-5xl font-bold mt-6">
        {tourPackage.title}
      </h1>

      <p className="mt-4 text-lg">
        {
          tourPackage.description
        }
      </p>

      <h2 className="mt-4 text-2xl font-bold">
        ₹{tourPackage.price}
      </h2>

      <h3 className="mt-2">
        Duration:
        {
          tourPackage.duration
        }
      </h3>

      <div className="mt-10">

        <InquiryForm
          packageId={id}
        />

      </div>

    </div>
  );
};

export default PackageDetails;