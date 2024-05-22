import samplePDF from "./assets/danov-songbook-2024.pdf";
import "./App.css";

function App() {
  return (
    <>
      <h2 className="text-2xl text-center font-semibold  text-sky-700 mt-20">
        Петър Дънов
      </h2>
      <h1 className="text-4xl text-center font-bold  text-sky-700 mt-6">
        Песни от Учителя
      </h1>
      <h1 className="text-lg p-3 italic text-center text-sky-700 mt-6">
        Четвърто преработено и допълнено издание
      </h1>
      <h1 className="text-lg text-center font-semibold text-sky-700 mt-6">
        2024
      </h1>
      <div className="max-w-5xl mx-auto my-10 pl-9 pr-9 pt-1 pb-8 bg-amber-100 rounded-lg shadow-md">
        <div className="embed-responsive mt-10" style={{ height: "100vh" }}>
          <embed
            src={samplePDF}
            type="application/pdf"
            width="100%"
            height="100%"
          />
        </div>
      </div>
      <div className="max-w-4xl mx-auto my-10 p-2">
        <p className="text-2xl text-center text-sky-700">
          Интерактивният пдф-документ предлага:
        </p>
        <ul className="mt-3 pl-5 pr-5 list-disc">
          <li className="mt-1 ml-10 text-lg font-semibold text-sky-700">
            Азбучно съдържание за мобилни устройства с навигация към всяка песен
          </li>
          <li className="ml-10 text-lg font-semibold  text-sky-700">
            Навигация от съдържанието на документа
          </li>
          <li className="ml-10 text-lg font-semibold  text-sky-700">
            Навигация от заглавието на всяка песен до съответната обяснителна
            бележка
          </li>
          <li className="ml-10 text-lg font-semibold  text-sky-700">
            Обратна навигация от обяснителната бележка на песента към
            съответната песен
          </li>
          <li className="ml-10 text-lg font-semibold  text-sky-700">
            Азбучен показател с навигация към съответната песен
          </li>
        </ul>
        <p className=" pl-5 text-center pr-5 text-2xl mt-4 font-semibold text-sky-700">
          Желаем приятни индивидуални и колективни музикални занимания!
        </p>
        <p className=" pl-5 pr-5 text-center text-2xl mt-4 font-semibold text-sky-700">
          Бог е Любов.
        </p>
      </div>
    </>
  );
}

export default App;
