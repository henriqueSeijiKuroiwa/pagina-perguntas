import { useState } from "react";
import EnviarResposta from "./components/EnviarResposta";
import Navbar from "./components/Navbar";
import Questionario from "./components/Questionario";
import TituloConteudo from "./components/TituloConteudo";
import questions from "./components/questions";

function App() {
  const [botao, setBotao] = useState(false);
  const [selectedOption1, setSelectedOption1] = useState(null);
  const [feedback1, setFeedback1] = useState("");
  const [selectedOption2, setSelectedOption2] = useState(null);
  const [feedback2, setFeedback2] = useState("");
  const [selectedOption3, setSelectedOption3] = useState(null);
  const [feedback3, setFeedback3] = useState("");

  const handleSubmit = () => {
    if (selectedOption1 === questions[0].correctAnswer) {
      setFeedback1("✅ Resposta correta!");
    } else {
      setFeedback1("❌ Resposta incorreta. Tente novamente.");
    }

    if (selectedOption2 === questions[1].correctAnswer) {
      setFeedback2("✅ Resposta correta!");
    } else {
      setFeedback2("❌ Resposta incorreta. Tente novamente.");
    }

    if (selectedOption3 === questions[2].correctAnswer) {
      setFeedback3("✅ Resposta correta!");
    } else {
      setFeedback3("❌ Resposta incorreta. Tente novamente.");
    }
  };

  return (
    <div>
      <Navbar />
      <div className="bg-blue-500 w-auto h-auto flex justify-center p-6">
        <div className="w-[800px] space-y-4">
          <TituloConteudo />
          <Questionario
            number={0}
            selectedOption={selectedOption1}
            setSelectedOption={setSelectedOption1}
            feedback={feedback1}
          />
          <Questionario
            number={1}
            selectedOption={selectedOption2}
            setSelectedOption={setSelectedOption2}
            feedback={feedback2}
          />
          <Questionario
            number={2}
            selectedOption={selectedOption3}
            setSelectedOption={setSelectedOption3}
            feedback={feedback3}
          />
          <EnviarResposta pressBotao={() => handleSubmit()} />
        </div>
      </div>
    </div>
  );
}

export default App;
