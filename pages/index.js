import { useState } from "react";

export default function LoveMessage() {
  const [showMessage, setShowMessage] = useState(false);
  const handleClick = () => {
    setShowMessage(true);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-purple-200 to-pink-200 text-center p-4 relative overflow-hidden">

      
      {!showMessage ? (
        <div className="transform transition-all duration-500 hover:scale-105">

          <button
            className="bg-gradient-to-r from-pink-400 to-purple-500 text-white px-6 py-3 rounded-full shadow-lg hover:from-pink-500 hover:to-purple-600 transform transition-all duration-300 hover:-translate-y-1 font-semibold text-lg"
            onClick={handleClick}
          >
            ✨ Clique aqui ✨
          </button>
        </div>
      ) : (
        <div className="bg-white p-8 rounded-2xl shadow-xl border-4 border-pink-300 max-w-md w-full transform transition-all duration-500 animate-bounce-once">
          <div className="text-5xl mb-4">💖</div>
          <h2 className="text-2xl font-bold text-pink-600 mb-3">Amo você!</h2>
          <p className="mt-4 text-lg text-purple-700">
            Se você me ama, manda um beijinho! 😘
          </p>

        </div>
      )}
    </div>
  );
}