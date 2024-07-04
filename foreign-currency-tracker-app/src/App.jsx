import "./App.css";
import BuySellComponent from "./components/BuySellComponent";

import FirstCountries from "./components/FirstCountries";
import SecondCountries from "./components/SecondCountries";
function App() {
  return (
    <>
      <div className="container flex flex-row  gap-10 justify-center items-center min-h-screen">
        <div className="main-div flex flex-row gap ">
          <FirstCountries />
          <BuySellComponent />
        </div>
        <div className="flex flex-row ">
          <SecondCountries />
          <BuySellComponent />
        </div>
      </div>
    </>
  );
}

export default App;
