import { useState } from "react";
import Button from "./components/Button";
import ButtonGradient from "./assets/svg/ButtonGradient";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark pt-10 pb-10" : " pt-10 pb-10"}>
      <button className="btn-primary" onClick={() => setDarkMode(!darkMode)}>
        Change theme
      </button>
    <h1 className="text-3xl font-bold underline">
      Hello World !
    </h1>
    <div className="mt=10 pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden" href="login">
      <Button className={"mt-10"} px={"px-7"} white>
        Main  
      </Button>
    </div>
      < ButtonGradient/>
    </div>
  );
}

export default App;
