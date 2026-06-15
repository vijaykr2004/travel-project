import { FaPhone, FaEnvelope, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="container mx-auto py-16 px-4">

      <h1 className="text-5xl font-bold text-center mb-10">
        Contact Us
      </h1>

      <div className="grid md:grid-cols-2 gap-10">

        <div>
          <h2 className="text-3xl font-bold mb-5">
            Get In Touch
          </h2>

          <p className="mb-4 flex items-center gap-3">
            <FaPhone />
            +91 9876543210
          </p>

          <p className="mb-4 flex items-center gap-3">
            <FaEnvelope />
            info@travelexplorer.com
          </p>

          <p className="mb-4 flex items-center gap-3">
            <FaWhatsapp />
            WhatsApp Support Available
          </p>

          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb="
            className="w-full h-80 rounded-lg"
          ></iframe>

        </div>

        <form className="bg-white p-8 shadow-lg rounded-lg">

          <input
            type="text"
            placeholder="Name"
            className="border p-3 w-full mb-4"
          />

          <input
            type="email"
            placeholder="Email"
            className="border p-3 w-full mb-4"
          />

          <textarea
            rows="5"
            placeholder="Message"
            className="border p-3 w-full mb-4"
          ></textarea>

          <button className="bg-blue-600 text-white px-5 py-3 rounded">
            Send Message
          </button>

        </form>

      </div>

    </div>
  );
};

export default Contact;