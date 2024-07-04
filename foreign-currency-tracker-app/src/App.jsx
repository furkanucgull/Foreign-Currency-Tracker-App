import "./App.css";

import FirstCountries from "./components/FirstCountries";
import SecondCountries from "./components/SecondCountries";
function App() {
  return (
    <>
      <div className="main-div flex flex-row gap-20 ">
        <FirstCountries />
        <SecondCountries />
      </div>
    </>
  );
}

export default App;
