import EnviarResposta from "./components/EnviarResposta";
import Navbar from "./components/Navbar";
import Questionario from "./components/Questionario";
import TituloConteudo from "./components/TituloConteudo";

function App() {
  return (
    <div>
      <Navbar />
      <div className="bg-blue-500 w-auto h-auto flex justify-center p-6">
        <div className="w-[800px] space-y-4">
          <TituloConteudo />
          <Questionario number={0} />
          <Questionario number={1} />
          <Questionario number={2} />
          <EnviarResposta />
        </div>
      </div>
    </div>
  );
}

export default App;
