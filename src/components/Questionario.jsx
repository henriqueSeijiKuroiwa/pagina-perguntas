import { useState } from "react";
import questions from "./questions";

function Questionario(props) {
  const [selectedOption, setSelectedOption] = useState(null);
  const [feedback, setFeedback] = useState("");
  const [openIndexes, setOpenIndexes] = useState([]);

  const toggleAccordion = (index) => {
    setOpenIndexes((prevIndexes) =>
      prevIndexes.includes(index)
        ? prevIndexes.filter((i) => i !== index) // Fecha se já estiver aberto
        : [...prevIndexes, index] // Abre um novo item sem fechar os outros
    );
  };

  const handleSubmit = () => {
    if (selectedOption === questions[props.number].correctAnswer) {
      setFeedback("✅ Resposta correta!");
    } else {
      setFeedback("❌ Resposta incorreta. Tente novamente.");
    }
  };

  return (
    <div className="p-4 w-[800px] mx-auto bg-white shadow-lg rounded-lg space-y-4">
      <p className="text-slate-400">
        (Pontos: 3 pts)
      </p>
      <h2 className="text-xl font-bold mb-4">
        {props.number + 1 + ") " + questions[props.number].text}
      </h2>
      <div className="flex flex-col space-y-4">
        {questions[props.number].options.map((option, index) => (
          <label
            key={index}
            className="block bg-blue-300 p-2 border rounded-md cursor-pointer hover:bg-blue-600 hover:text-white active:bg-blue-800"
          >
            <input
              type="radio"
              name="quiz"
              value={index}
              onChange={() => setSelectedOption(index)}
              className="mr-2"
            />
            {option}
          </label>
        ))}
      </div>
      <button
        onClick={handleSubmit}
        className="mt-4 px-4 py-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-600"
      >
        Enviar Resposta
      </button>
      <div className="flex flex-col">
        {questions[props.number].dicas.map((dica, index) => (
          <div key={index} className="">
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full block bg-blue-300 border rounded-md cursor-pointer hover:bg-blue-600 hover:text-white active:bg-blue-800 text-left p-2"
            >
              {"Dica " +
                (index + 1) +
                " (-" +
                (index + 1) +
                " ponto" +
                (index === 0 ? "" : "s") +
                ")"}
            </button>
            {openIndexes.includes(index) && (
              <div className="p-3 bg-gray-100 text-black">{dica}</div>
            )}
          </div>
        ))}
      </div>
      {feedback && <p className="mt-3 text-lg">{feedback}</p>}
    </div>
  );
}

export default Questionario;
