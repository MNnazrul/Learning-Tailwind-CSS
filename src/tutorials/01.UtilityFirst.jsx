import React, { useEffect, useState } from "react";

function UtilityFirst() {
  const [mode, setMode] = useState("light");
  const link =
    "https://avatars.githubusercontent.com/u/69568084?s=400&u=81bba36df177c605b9f62cd1d1e6aee7862b51b7&v=4";

  useEffect(() => {
    const htmlElement = document.querySelector("html");
    htmlElement.classList.remove("dark", "light");
    htmlElement.classList.add(mode);
  }, [mode]);

  return (
    <body className="h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 ">
      <div className="p-8 bg-white rounded-xl shadow-md mb-4 dark:bg-gray-800">
        <button
          className=" px-2 py-1 bg-gray-200 rounded-full text-sm hover:bg-gray-300 dark:bg-gray-900 dark:text-white"
          onClick={() => setMode((prev) => (prev == "dark" ? "light" : "dark"))}
        >
          {`click me to change for ${mode} mode`}
        </button>
      </div>
      <div className="p-8 bg-white rounded-xl shadow-md space-y-2 sm:flex sm:items-center sm:py-4 sm:space-y-0 sm:space-x-6 dark:bg-gray-800 sm:dark:hover:bg-gray-700">
        <img
          className="h-24 rounded-full ring-4 ring-green-300 sm:mx-0 sm:flex-shrink-0 hover:scale-105 duration-500 hover:ring-green-600"
          src={link}
          alt="MNnazrul image"
        />
        <div className="text-center space-y-1 sm:text-left">
          <div className="space-y-0.5">
            <p className="text-lg text-black font-semibold dark:text-gray-300">
              Nazrul Islam
            </p>
            <p className="text-gray-500 font-medium dark:text-gray-400 ">
              Linked In
            </p>
          </div>
          <button className="px-4 py-1 rounded-full text-sm border border-purple-300 font-semibold hover:text-white hover:border-transparent hover:bg-red-300 focus:ring-2   focus:ring-red-400 focus:ring-offset-2 dark:text-purple-300 dark:focus:ring-offset-gray-800">
            Visit now
          </button>
        </div>
      </div>
    </body>
  );
}

export default UtilityFirst;

// 1 rem = 16 px
