import { useState } from "react";
import toast from "react-hot-toast";

import {
  createInquiry,
} from "../services/inquiryService";

const InquiryForm = () => {
  const [formData,
    setFormData] =
    useState({
      fullName: "",
      email: "",
      mobile: "",
      destination: "",
      travelDate: "",
      travelers: 1,
      message: "",
    });

  const handleChange =
    (e) => {
      setFormData({
        ...formData,
        [e.target.name]:
          e.target.value,
      });
    };

  const handleSubmit =
    async (e) => {
      e.preventDefault();

      try {
        const token =
          localStorage.getItem(
            "token"
          );

        await createInquiry(
          formData,
          token
        );

        toast.success(
          "Inquiry Submitted"
        );

        setFormData({
          fullName: "",
          email: "",
          mobile: "",
          destination: "",
          travelDate: "",
          travelers: 1,
          message: "",
        });
      } catch (error) {
        toast.error(
          "Failed To Submit"
        );
      }
    };

  return (
    <form
      onSubmit={
        handleSubmit
      }
      className="bg-white p-6 rounded shadow"
    >

      <h2 className="text-2xl font-bold mb-5">
        Send Inquiry
      </h2>

      <input
        type="text"
        name="fullName"
        placeholder="Full Name"
        className="border p-3 w-full mb-3"
        onChange={
          handleChange
        }
        value={
          formData.fullName
        }
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        className="border p-3 w-full mb-3"
        onChange={
          handleChange
        }
        value={
          formData.email
        }
      />

      <input
        type="text"
        name="mobile"
        placeholder="Mobile Number"
        className="border p-3 w-full mb-3"
        onChange={
          handleChange
        }
        value={
          formData.mobile
        }
      />

      <input
        type="text"
        name="destination"
        placeholder="Destination"
        className="border p-3 w-full mb-3"
        onChange={
          handleChange
        }
        value={
          formData.destination
        }
      />

      <input
        type="date"
        name="travelDate"
        className="border p-3 w-full mb-3"
        onChange={
          handleChange
        }
        value={
          formData.travelDate
        }
      />

      <textarea
        name="message"
        placeholder="Message"
        className="border p-3 w-full mb-3"
        onChange={
          handleChange
        }
        value={
          formData.message
        }
      />

      <button className="bg-green-600 text-white px-5 py-3 rounded">
        Submit Inquiry
      </button>

    </form>
  );
};

export default InquiryForm;