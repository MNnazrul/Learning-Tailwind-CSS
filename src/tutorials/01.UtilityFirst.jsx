import React from "react";

function UtilityFirst() {
  const link =
    "https://avatars.githubusercontent.com/u/69568084?s=400&u=81bba36df177c605b9f62cd1d1e6aee7862b51b7&v=4";

  return (
    <body className="h-screen flex items-center justify-center bg-gray-100">
      <div className="p-8 bg-white rounded-xl shadow-md space-y-2 sm:flex sm:items-center sm:py-4 sm:space-y-0 sm:space-x-6">
        <img
          className="h-24 rounded-full ring-4 ring-green-300 sm:mx-0 sm:flex-shrink-0"
          src={link}
          alt="MNnazrul image"
        />
        <div className="text-center space-y-1 sm:text-left">
          <div className="space-y-0.5">
            <p className="text-lg text-black font-semibold">Nazrul Islam</p>
            <p className="text-gray-500 font-medium">Linked In</p>
          </div>
          <button className="px-4 py-1 rounded-full text-sm border border-purple-300 font-semibold">
            Visit now
          </button>
        </div>
      </div>
    </body>
  );
}

export default UtilityFirst;

// 1 rem = 16 px
