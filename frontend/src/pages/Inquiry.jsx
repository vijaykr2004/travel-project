import { useState } from "react";

const Inquiry = () => {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    mobile: "",
    destination: "",
    travelers: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(form);

    alert("Inquiry Submitted Successfully");
  };

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-center mb-8">
        Travel Inquiry Form
      </h1>

      <form
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto bg-white shadow-lg p-8 rounded-lg"
      >
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          className="w-full border p-3 mb-4 rounded"
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full border p-3 mb-4 rounded"
          onChange={handleChange}
        />

        <input
          type="text"
          name="mobile"
          placeholder="Mobile Number"
          className="w-full border p-3 mb-4 rounded"
          onChange={handleChange}
        />

        <input
          type="text"
          name="destination"
          placeholder="Destination"
          className="w-full border p-3 mb-4 rounded"
          onChange={handleChange}
        />

        <input
          type="number"
          name="travelers"
          placeholder="Number of Travelers"
          className="w-full border p-3 mb-4 rounded"
          onChange={handleChange}
        />

        <textarea
          name="message"
          placeholder="Your Message"
          rows="4"
          className="w-full border p-3 mb-4 rounded"
          onChange={handleChange}
        ></textarea>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg"
        >
          Submit Inquiry
        </button>
      </form>
    </div>
  );
};

export default Inquiry;