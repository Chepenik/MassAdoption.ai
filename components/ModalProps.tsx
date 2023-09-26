import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  content: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, content }) => {
  const closeModal = () => {
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
      <div className="z-10 bg-white p-8 rounded-lg max-w-md w-full relative">
        <button
          onClick={closeModal}
          className="absolute top-2 right-2 text-orange-600 hover:text-red-800 cursor-pointer"
        >
          X
        </button>
        <p className="text-gray-800">{content}</p>
      </div>
    </div>
  );
};

export default Modal;
