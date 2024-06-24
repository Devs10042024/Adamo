import { useState } from "react";

const FAQ = ({ questions }) => {
  const [expandedQuestionIndex, setExpandedQuestionIndex] = useState(null);

  const handleQuestionClick = (index) => {
    setExpandedQuestionIndex(expandedQuestionIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-xl mx-auto font-livic flex flex-col gap-5">
      {questions.map((question, index) => (
        <div key={index} className="border-b border-gray-300 py-4">
          <button
            onClick={() => handleQuestionClick(index)}
            className="w-full text-left flex justify-between items-center focus:outline-none"
          >
            <span className="text-lg">{question.question}</span>
            <svg
              className={`w-5 h-5 transition-transform duration-300 ${
                expandedQuestionIndex === index ? "transform rotate-180" : ""
              }`}
              fill="none"
              stroke="blue"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          <div
            className={`mt-2 overflow-hidden ${
              expandedQuestionIndex === index ? "max-h-screen" : "max-h-0"
            }`}
          >
            <p className="text-gray-600">{question.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQ;
