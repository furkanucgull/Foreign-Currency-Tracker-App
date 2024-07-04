import russianFlag from "../images/russian.jpg";
import swissFlag from "../images/swiss.png";
import chinaFlag from "../images/china.png";
import ukFlag from "../images/uk.png";
import ausFlag from "../images/aus.jpg";
function SecondCountries() {
  return (
    <>
      <main className="border-2 border-solid border-gray-200">
        <div className=" bg-neutral-100 w-80 h-14 ">
          <h2 className=" mx-2 font-serif text-2xl ml-3 mt-3  hover:bg-slate-300">Country</h2>
        </div>
        <section>
          <div className="country1 bg-slate-200 p-4 hover:bg-slate-50 border-b-2  border-gray-300">
            <div className="flex flex-row gap-20 ">
              <div>
                <h2 className="font-bold">RUB</h2>
                <p className="font-thin text-nowrap">Russian Ruble</p>
              </div>

              <div className="image ">
                <img className="w-16 h-11  ml-10" src={russianFlag} alt="" />
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="country1 bg-slate-50 p-4 hover:bg-slate-200 border-b-2  border-gray-300">
            <div className="flex flex-row gap-20 ">
              <div>
                <h2 className="font-bold">CHF</h2>
                <p className="font-thin text-nowrap">Swiss Franc</p>
              </div>

              <div className="image ">
                <img className="w-16 h-11  ml-14" src={swissFlag} alt="" />
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="country1 bg-slate-200 p-4 hover:bg-slate-50 border-b-2  border-gray-300">
            <div className="flex flex-row gap-20 ">
              <div>
                <h2 className="font-bold">CNY</h2>
                <p className="font-thin text-nowrap">Canadian Dollar</p>
              </div>

              <div className="image ">
                <img className="w-16 h-11  ml-6" src={chinaFlag} alt="" />
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="country1 bg-slate-50 p-4 hover:bg-slate-200 border-b-2  border-gray-300">
            <div className="flex flex-row gap-20 ">
              <div>
                <h2 className="font-bold">GBP</h2>
                <p className="font-thin text-nowrap">Pound sterling</p>
              </div>

              <div className="image ">
                <img className="w-16 h-11  ml-9" src={ukFlag} alt="" />
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="country1 bg-slate-200 p-4 hover:bg-slate-50 border-b-2  border-gray-300">
            <div className="flex flex-row gap-20 ">
              <div>
                <h2 className="font-bold">AUD</h2>
                <p className="font-thin text-nowrap">Austrian Dollar</p>
              </div>

              <div className="image ">
                <img className="w-16 h-11  ml-9" src={ausFlag} alt="" />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default SecondCountries;
