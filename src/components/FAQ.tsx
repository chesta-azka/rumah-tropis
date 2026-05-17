import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown } from 'react-icons/fi';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const answerVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: 'auto' }
  };

  return (
    <div className="border-b border-[#654C37]">
      <button
        className="w-full flex justify-between items-center py-5 text-left text-lg font-semibold text-[#E1C5A8]"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{question}</span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <FiChevronDown />
        </motion.span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={answerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="overflow-hidden"
          >
            <p className="pb-5 text-[#C3A180]">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "What makes a 'tropical house' design unique?",
      answer: "Tropical house designs prioritize natural ventilation, extensive openings, and materials that stay cool, like wood and stone. They often feature large overhangs for shade and seamless integration with the surrounding landscape to create a breezy and open living experience."
    },
    {
      question: "How long does the design and construction process take?",
      answer: "The timeline varies depending on the complexity of the project and location. On average, the design phase can take 2-4 months, and construction can range from 8-12 months. We provide a detailed timeline after the initial consultation."
    },
    {
      question: "Do you handle both architecture and interior design?",
      answer: "Yes, we offer a comprehensive service that includes both architectural and interior design. Our team works holistically to ensure the inside of your home is a perfect extension of the architectural style."
    },
    {
      question: "Can you work with a lot I already own?",
      answer: "Absolutely. We can assess your land and create a custom design that maximizes its potential, taking into account factors like sun orientation, views, and natural landscape features."
    },
    {
      question: "What is your fee structure?",
      answer: "Our fees are typically a percentage of the total construction cost, but we can also work on a fixed-fee basis. We are transparent about all costs and will provide a detailed proposal before any work begins."
    }
  ];

  return (
    <div className="bg-[#3A2D23] py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6 }} 
            viewport={{once: true}}
            className="text-4xl font-bold text-center text-white mb-10"
        >
            Frequently Asked Questions
        </motion.h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={{ 
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { delay: index * 0.15 } }
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
