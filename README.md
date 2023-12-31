# React + Vite

# Learning Tailwind CSS with react.

### Class - 01:

```jsx
import React from "react";

function UtilityFirst() {
  const link =
    "https://avatars.githubusercontent.com/u/69568084?s=400&u=81bba36df177c605b9f62cd1d1e6aee7862b51b7&v=4";

  return (
    <body className="h-screen flex items-center justify-center bg-gray-100">
      <div className="p-8 bg-white rounded-xl shadow-md space-y-2">
        <img className="h-24 rounded-full ring-4 ring-blue-300" src={link} />
        <div className="text-center space-y-2">
          <div>
            <p className="text-lg text-black font-semibold">Nazrul Islam</p>
            <p className="text-gray-500 font-medium">Linked In</p>
          </div>
          <button className="px-4 py-1 rounded-full text-sm border border-purple-300">
            Visit now
          </button>
        </div>
      </div>
    </body>
  );
}

export default UtilityFirst;

// 1 rem = 16 px
```

#### Details explanation of the css property :

1. body className="h-screen flex items-center justify-center bg-gray-100"

   - h-screen: Sets the height of the element to 100% of the viewport height.
   - flex: Enables a flex container.
   - items-center: Centers the child elements vertically within the flex container.
   - justify-center: Centers the child elements horizontally within the flex container.
   - bg-gray-100: Sets the background color to a light gray (#f5f5f5).

2. div className="p-8 bg-white rounded-xl shadow-md space-y-2"

   - p-8: Sets padding of 8 units (using spacing defined in Tailwind CSS) on all sides of the element.
   - bg-white: Sets the background color to white.
   - rounded-xl: Applies extra-large border-radius to create rounded corners.
   - shadow-md: Adds a medium-sized shadow to create a sense of elevation.
   - space-y-2: Sets vertical spacing between child elements to 2 units.

3. img className="h-24 rounded-full ring-4 ring-blue-300" src={link}

   - h-24: Sets the height of the image to 24 units.
   - rounded-full: Applies a full border-radius to make the image circular.
   - ring-4: Adds a 4-unit border around the image.
   - ring-blue-300: Sets the border color to a shade of blue (#90cdf4).

4. p className="text-lg text-black font-semibold"

   - text-lg: Sets the font size to large.
   - text-black: Sets the text color to black.
   - font-semibold: Applies semi-bold font weight.

5. p className="text-gray-500 font-medium"

   - text-gray-500: Sets the text color to a medium gray (#7b7b7b).
   - font-medium: Applies medium font weight.

6. button className="px-4 py-1 rounded-full text-sm border border-purple-300"

   - px-4: Sets horizontal padding of 4 units.
   - py-1: Sets vertical padding of 1 unit.
   - rounded-full: Applies a full border-radius to make the button circular.
   - text-sm: Sets the font size to small.
   - border: Adds a default border to the button.
   - border-purple-300: Sets the border color to a shade of purple (#b794f4).

## Class - 02 : Responsive property of taiwlind

1. body tag

- Class Name: h-screen flex items-center justify-center bg-gray-100

  - Details:

    - max-w-sm: Sets the maximum width of the element to a small width.
    - mx-auto: Centers the element horizontally using auto margin.
    - p-8: Adds padding of size 8.
    - bg-white: Sets the background color to white.
    - rounded-xl: Applies extra-large border-radius for rounded corners.
    - shadow-md: Adds a medium-sized shadow for a lifted appearance.
    - space-y-2: Sets vertical spacing between direct child elements.
    - sm:flex sm:items-center sm:py-4 sm:space-y-0 sm:space-x-6: Applies the following styles only on small screens:
      - flex: Enables a flex container.
      - items-center: Centers the items along the vertical axis.
      - py-4: Adds padding of size 4 along the vertical axis.
      - space-y-0: Eliminates vertical spacing between direct child elements.
      - space-x-6: Sets horizontal spacing between direct child elements.

## Class - 03 : Hover and focus effect in tailwind.

- Hover Styles: This prefix is used to apply styles when the mouse cursor is positioned over an element. It's a way to define how an element should appear or behave when it is being hovered.

  - hover:scale-105: When the element is hovered over, it will be scaled to 105% of its original size. This adds a scaling effect on hover.
  - duration-500: The scaling transition will take 500 milliseconds (0.5 seconds) to complete. This controls the speed of the scaling animation.
  - hover:ring-green-600: Adds a green ring around the element when it is hovered over. The 600 in green-600 represents the shade or intensity of the green color.
  - hover:text-white: Changes the text color to white when the element is hovered over.
  - hover:border-transparent: Makes the border of the element transparent on hover.
  - hover:bg-red-300: Changes the background color to a shade of red with an intensity of 300 when the element is hovered over.

- Focus Styles: This prefix is used to apply styles when an element gains focus. Elements typically gain focus when they are selected, often using the keyboard (e.g., pressing the Tab key to navigate through interactive elements).

  - focus:ring-2: Adds a 2px ring around the element when it is in focus. The ring appears when the element is selected, often with the keyboard.
  - focus:ring-red-400: Specifies the color of the focus ring to be a shade of red with an intensity of 400.
  - focus:ring-offset-2: Adds an offset to the focus ring, making it slightly larger than the element itself. The 2 specifies the size of the offset.

## Class - 04 : Dark Mode.

- Create a button such that after click the color mode will change.

_NOTE_ : add `darkMode: "class", // media or class` to `tailwind.cofig.js` file. Learn about the modes(media and class). For using class mode, you have to add `class` to `html` tag inside `index.html` file.

```jsx
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
```

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
