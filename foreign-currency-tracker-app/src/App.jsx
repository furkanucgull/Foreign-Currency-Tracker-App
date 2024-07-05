import "./App.css";
import BuySellComponent from "./components/BuySellComponent";
import FirstCountries from "./components/FirstCountries";
import SecondCountries from "./components/SecondCountries";
import { FaEuroSign } from "react-icons/fa";

const currencies = ["USD", "JPY", "PLN", "KRW", "TRY"];
const secondCurrencies = ["RUB", "CHF", "CNY", "GBP", "AUD"];

function App() {
  return (
    <>
      <div className="flex justify-center items-center flex-row ">
        <div className="text-2xl font-serif flex flex-row mt-6">
          <h2 className=" mr-2 text-white">
            Current Currency : <span className="font-roboto text-white">Euro</span>
          </h2>
          <p className="text-lg mt-1.5 text-white">
            <FaEuroSign />
          </p>
        </div>
      </div>
      <div className="container flex flex-row  gap-10 mt-16 justify-center items-center opacity-90 ">
        <div className="main-div flex flex-row gap ">
          <FirstCountries />
          <BuySellComponent currencies={currencies} title="Buy" />
        </div>
        <div className="flex flex-row ">
          <SecondCountries />
          <BuySellComponent currencies={secondCurrencies} title="Buy" />
        </div>
      </div>
    </>
  );
}

export default App;
