import React, { useState } from 'react'
import img1 from "../assets/bg-1.jpg"
import img2 from "../assets/medcare.png"
import plusIcon from "../assets/plus-icon.png"
import minusIcon from "../assets/minus-icon.png"

const Faq = () => {

  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const questions = [
    { id: 1, ques: "What are your visitng hours", answer: "Our visiting hours is from 9am - 10pm" },
    { id: 2, ques: "Do you offer emergency services", answer: "Yes, we do offer emergency services" },
    { id: 3, ques: "How can I book appointment", answer: "You can book appointment via calls or visit the hospital" },
    { id: 4, ques: "Do you accept health insurance", answer: "Yes, we do accept health insurance" },
    { id: 5, ques: "Do you provide ambulance services", answer: "Yes, we do provide ambulance services" },
    { id: 6, ques: "Is there any onsite pharmacy", answer: "Yes, there is an onsite pharmacy" },

  ]

  return (
    <div className="flex flex-col lg:flex-row justify-center items-center  px-4 max-w-[1200px] mx-auto gap-8">
  
  {/* Left: Image */}
  <div className="w-full lg:w-1/2 flex justify-center">
    <img src={img1} alt="Illustration" className="w-full max-w-[400px] h-auto" />
  </div>

  {/* Right: Questions */}
  <div className="w-full lg:w-1/2 flex flex-col items-center">
    {questions.map((question, index) => (
      <div key={index} className="w-full max-w-[600px] my-4">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => toggle(index)}
        >
          <p className="text-lg md:text-xl font-semibold">{question.ques}</p>
          <img
            src={openIndex === index ? minusIcon : plusIcon}
            alt="toggle"
            className="w-5 h-5"
          />
        </div>
        {openIndex === index && (
          <p className="mt-2 text-gray-600">{question.answer}</p>
        )}
      </div>
    ))}
  </div>

</div>

  )
}

export default Faq
