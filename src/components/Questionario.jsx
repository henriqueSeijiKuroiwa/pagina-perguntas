import { useState } from "react";
import questions from "./questions";
import { ChevronDown, ChevronUp } from "lucide-react";

function Questionario({ number, selectedOption, setSelectedOption, feedback }) {
  const [openIndexes, setOpenIndexes] = useState([]);

  const toggleAccordion = (index) => {
    setOpenIndexes(
      (prevIndexes) =>
        prevIndexes.includes(index)
          ? prevIndexes.filter((i) => i !== index) // Fecha se já estiver aberto
          : [...prevIndexes, index] // Abre um novo item sem fechar os outros
    );
  };

  return (
    <div className="p-4 w-[800px] mx-auto bg-white shadow-lg rounded-lg space-y-4">
      <p className="text-slate-400">(Pontos: 3 pts)</p>
      <h2 className="text-xl font-bold mb-4">
        {number + 1 + ") " + questions[number].text}
      </h2>
      <div className="flex flex-col space-y-4">
        {questions[number].options.map((option, index) => (
          <label
            key={index}
            className="block bg-blue-300 p-2 border rounded-md cursor-pointer hover:bg-blue-600 hover:text-white active:bg-blue-800"
          >
            <input
              type="radio"
              name={`quiz-${number}`}
              value={index}
              onChange={() => setSelectedOption(index)}
              className="mr-2"
            />
            {String.fromCharCode(97+index)+") "+option}
          </label>
        ))}
      </div>
      {feedback && <p className="mt-3 text-lg">{feedback}</p>}
      <div className="flex flex-col">
        {questions[number].dicas.map((dica, index) => (
          <div key={index} className="">
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full flex justify-between bg-blue-300 border cursor-pointer hover:bg-blue-600 hover:text-white active:bg-blue-800 text-left p-2"
            >
              <span>
                {"Dica " +
                  (index + 1) +
                  " (-" +
                  (index + 1) +
                  " ponto" +
                  (index === 0 ? "" : "s") +
                  ")"}
              </span>
              {openIndexes.includes(index) ? (
                <ChevronUp className="text-xl" />
              ) : (
                <ChevronDown className="text-xl" />
              )}
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openIndexes.includes(index)
                  ? "max-h-[500px] p-3 bg-blue-100"
                  : "max-h-0 pl-3 bg-blue-100"
              }`}
            >
              <div>{dica}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Questionario;
