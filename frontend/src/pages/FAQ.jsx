import { useState } from "react";

const FAQ = () => {

  const faqs = [
    {
      question:
        "How do I book a package?",
      answer:
        "Choose your package and submit an inquiry.",
    },
    {
      question:
        "Can I cancel my booking?",
      answer:
        "Yes, cancellation policies apply.",
    },
    {
      question:
        "How do refunds work?",
      answer:
        "Refunds are processed according to company policy.",
    },
  ];

  const [open, setOpen] =
    useState(null);

  return (
    <div className="container mx-auto py-16 px-4">

      <h1 className="text-5xl font-bold text-center mb-10">
        Frequently Asked Questions
      </h1>

      {faqs.map(
        (faq, index) => (
          <div
            key={index}
            className="border mb-4 rounded-lg"
          >
            <button
              onClick={() =>
                setOpen(
                  open === index
                    ? null
                    : index
                )
              }
              className="w-full text-left p-4 font-bold"
            >
              {faq.question}
            </button>

            {open === index && (
              <div className="p-4 bg-gray-100">
                {faq.answer}
              </div>
            )}
          </div>
        )
      )}

    </div>
  );
};

export default FAQ;