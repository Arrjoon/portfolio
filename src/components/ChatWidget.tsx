import React from "react";

const ChatWidget = () => {
  return (
    <div className="fixed bottom-12 right-5 flex flex-col gap-3 z-50">
      {/* WhatsApp */}
      <a
        href="https://wa.me/9779862569729?text=Hi%20I%20visited%20your%20portfolio"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-green-500 flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
          className="w-8 h-8"
        />
      </a>

      

      {/* Messenger */}
         {/* <a
            href="https://m.me/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 rounded-full bg-blue-600 flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        >
            <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="white"
            className="w-8 h-8"
            >
            <path d="M12 2C6.48 2 2 6.03 2 11.25c0 2.66 1.1 5.05 2.9 6.78V22l3.36-1.85c.97.27 2 .41 3.04.41 5.52 0 10-4.03 10-9.25S17.52 2 12 2zm-.74 13.5l-2.92-3.15-3.32 3.15 6.24-6.61 2.92 3.15 3.32-3.15-6.24 6.61z"/>
            </svg>
        </a> */}
    </div>
  );
};

export default ChatWidget;
