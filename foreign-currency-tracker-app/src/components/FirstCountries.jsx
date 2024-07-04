import usaFlag from "../images/usa.png";
import japanFlag from "../images/japan.jpg";
import polandFlag from "../images/poland.png";
import koreanFlag from "../images/korean.png";
import turkeyFlag from "../images/turkey.jpg";

function FirstCountries() {
  return (
    <>
      <main className="border-2 border-solid border-gray-200">
        <div className=" bg-neutral-100 w-80 h-14 ">
          <h2 className=" mx-2 font-serif text-2xl ml-3 mt-3  hover:bg-slate-300">Country</h2>
        </div>

        <section>
          <div className="country1 bg-slate-200 p-4 hover:bg-slate-50 border-b-2  border-gray-300 ">
            <div className="flex flex-row gap-20 ">
              <div>
                <h2 className="font-bold">USD</h2>
                <p className="font-thin text-nowrap">United States Dollar</p>
              </div>

              <div className="image ">
                <img className="w-16 h-11 " src={usaFlag} alt="" />
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="country1 bg-slate-50 p-4 hover:bg-slate-200  border-b-2  border-gray-300">
            <div className="flex flex-row gap-20 ">
              <div>
                <h2 className="font-bold">JPY</h2>
                <p className="font-thin text-nowrap">Japanese Yen</p>
              </div>

              <div className="image ">
                <img className="w-16 h-11  ml-11" src={japanFlag} alt="" />
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="country1 bg-slate-200 p-4 hover:bg-slate-50 border-b-2  border-gray-300">
            <div className="flex flex-row gap-20 ">
              <div>
                <h2 className="font-bold">PLN</h2>
                <p className="font-thin text-nowrap">Polish Złoty</p>
              </div>

              <div className="image ">
                <img className="w-16 h-11  ml-14" src={polandFlag} alt="" />
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="country1 bg-slate-50 p-4 hover:bg-slate-200 border-b-2  border-gray-300">
            <div className="flex flex-row gap-20 ">
              <div>
                <h2 className="font-bold">KRW</h2>
                <p className="font-thin text-nowrap">South Korean Won</p>
              </div>

              <div className="image ">
                <img className="w-16 h-11  ml-2" src={koreanFlag} alt="" />
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="country1 bg-slate-200 p-4 hover:bg-slate-50 border-b-2  border-gray-300">
            <div className="flex flex-row gap-20 ">
              <div>
                <h2 className="font-bold">TRY</h2>
                <p className="font-thin text-nowrap">Turkish Lira</p>
              </div>

              <div className="image ">
                <img className="w-16 h-11  ml-14" src={turkeyFlag} alt="" />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default FirstCountries;
