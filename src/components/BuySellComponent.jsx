import { useEffect, useState } from "react";
import axios from "axios";

const base_url = "https://api.freecurrencyapi.com/v1/latest";
const api_key = "fca_live_CBZ95BUNjxCwpoHiy1TJOiEUIsXeEeWQmCeAgAsk";
const base_currency = "EUR";

function BuySellComponent({ currencies, title }) {
  const [rates, setRates] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const requests = currencies.map(currency =>
          axios.get(`${base_url}?apikey=${api_key}&base_currency=${base_currency}&target_currency=${currency}`)
        );

        const responses = await Promise.all(requests);
        const data = {};

        responses.forEach((response, index) => {
          const targetCurrency = currencies[index];
          data[targetCurrency] = response.data.data[targetCurrency];
        });

        setRates(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [currencies]);

  return (
    <div className="rate-container flex flex-row gap-3">
      {Object.keys(rates).length === 0 ? (
        <p>Loading...</p>
      ) : (
        <>
          <div className="title-container bg-neutral-100 opacity-90  ">
            <div className="bg-neutral-100 w-24 h-12 ml-4 flex justify-center items-center">
              <h2 className="font-arial text-lg">{title} Rates</h2>
            </div>
            <div className="bg-neutral-100 w-24 h-14 ml-4">
              {currencies.map(currency => (
                <div
                  key={currency}
                  className="flex justify-center items-center text-center mt-1 mr-3  h-20 bg-gray-200 border-b-2  border-gray-300 "
                >
                  <p className="font-bold text-xl text-nowrap">{rates[currency]?.toFixed(3)}</p>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default BuySellComponent;
