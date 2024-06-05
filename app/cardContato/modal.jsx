// src/components/Modal.js
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const Modal = ({ isVisible, onClose, children }) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div
            className="fixed inset-0 bg-gray-900 bg-opacity-50 backdrop-blur-sm"
            onClick={onClose}
          ></div>
          <motion.div
            className="bgSky rounded-lg shadow-lg py-5 px-10 relative z-20 w-1/2 h-2/3"
            initial={{ y: "-100vh", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-100vh", opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {children}
            <div className="absolute bgSvgsAzul1 z-10 -right-20 top-20 size-40"></div>
            <div className="absolute bgSvgsAzul2 z-10 bottom-10 left-0 size-40"></div>
            <div className="absolute bgSvgsAzul3 z-30 top-4 left-8 size-40"></div>
            <div className="absolute bgSvgsAzul4 z-30 bottom-5 left-1/3 w-80 h-10"></div>
            <button
              onClick={onClose}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
            >
              &times;
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
