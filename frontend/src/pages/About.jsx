import { FaPlane, FaUsers, FaGlobe } from "react-icons/fa";

const About = () => {
  return (
    <div>
      <section className="container mx-auto py-16 px-4">

        <h2 className="text-4xl font-bold text-center mb-8">
          Who We Are
        </h2>

        <p className="text-center text-lg text-gray-600 max-w-4xl mx-auto">
          Travel Explorer is a professional travel company offering
          customized tour packages across India. Our mission is to
          create unforgettable travel experiences for families,
          couples, and adventure lovers.
        </p>

      </section>

      <section className="container mx-auto py-10 grid md:grid-cols-3 gap-6">

        <div className="shadow-lg p-6 rounded-lg text-center">
          <FaPlane className="text-5xl mx-auto text-blue-600" />
          <h3 className="text-2xl font-bold mt-4">Mission</h3>
          <p>Deliver memorable travel experiences.</p>
        </div>

        <div className="shadow-lg p-6 rounded-lg text-center">
          <FaGlobe className="text-5xl mx-auto text-green-600" />
          <h3 className="text-2xl font-bold mt-4">Vision</h3>
          <p>Become India's trusted travel partner.</p>
        </div>

        <div className="shadow-lg p-6 rounded-lg text-center">
          <FaUsers className="text-5xl mx-auto text-orange-500" />
          <h3 className="text-2xl font-bold mt-4">Experience</h3>
          <p>Thousands of happy travelers.</p>
        </div>

      </section>

    </div>
  );
};

export default About;