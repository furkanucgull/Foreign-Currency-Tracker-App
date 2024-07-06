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
      <div
        className="container justify-center items-center gap-6 mt-16 opacity-90
             grid lg:grid-cols-2   "
      >
        <div className="main-div flex flex-row gap-4 lg:w-1/2">
          <FirstCountries />
          <BuySellComponent currencies={currencies} title="Buy" />
        </div>
        <div className="flex flex-row gap-4 ">
          <SecondCountries />
          <BuySellComponent currencies={secondCurrencies} title="Buy" />
        </div>
      </div>
    </>
  );
}

export default App;
