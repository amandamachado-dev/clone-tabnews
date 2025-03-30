import { useState } from "react";

export default function LoveMessage() {
  const [showMessage, setShowMessage] = useState(false);

  const handleClick = () => {
    setShowMessage(true);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-pink-200 text-center p-4">
      {!showMessage ? (
        <div>
          
          <button
            className="bg-red-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-600"
            onClick={handleClick}
          >
            Clique aqui
          </button>
        </div>
      ) : (
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold">Amo você, filha! ❤️</h2>
          <p className="mt-2 text-lg">Se você me ama, manda um beijinho! 😘</p>
        </div>
      )}
    </div>
  );
}