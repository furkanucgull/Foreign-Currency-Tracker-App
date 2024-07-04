import russianFlag from "../images/russian.jpg";
import swissFlag from "../images/swiss.png";
import chinaFlag from "../images/china.png";
import ukFlag from "../images/uk.png";
import ausFlag from "../images/aus.jpg";
function SecondCountries() {
  return (
    <>
      <main className="border-2 border-solid border-gray-200">
        <div className="title-container">
          <div className=" bg-neutral-100 w-72  h-14  ">
            <h2 className="  bg-neutral-100 w-32 h-14 font-bold pt-3 ml-4 ">Country</h2>
          </div>
        </div>
        <section>
          <div className="country1 bg-slate-200 p-4 hover:bg-slate-50 border-b-2  border-gray-300">
            <div className="flex flex-row gap-20 ">
              <div>
                <h2 className="font-bold">RUB</h2>
                <p className="font-thin text-nowrap">Russian Ruble</p>
              </div>

              <div className="image ">
                <img className="w-16 h-11  ml-8" src={russianFlag} alt="" />
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
                <img className="w-16 h-11  ml-12" src={swissFlag} alt="" />
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
                <img className="w-16 h-11  ml-4" src={chinaFlag} alt="" />
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
                <img className="w-16 h-11  ml-7" src={ukFlag} alt="" />
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
                <img className="w-16 h-11  ml-7" src={ausFlag} alt="" />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default SecondCountries;
