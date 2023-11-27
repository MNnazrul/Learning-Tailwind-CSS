import { useState } from "react";
import UtilityFirst from "./tutorials/01.UtilityFirst";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <UtilityFirst />
    </>
  );
}

export default App;
