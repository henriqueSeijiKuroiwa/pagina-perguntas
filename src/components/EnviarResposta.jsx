function EnviarResposta({ pressBotao }) {
  return (
    <div className="flex justify-self-end">
      <button
        onClick={pressBotao}
        className="px-4 py-2 bg-white text-blue-800 font-bold rounded hover:bg-blue-600 hover:text-white"
      >
        Enviar Resposta
      </button>
    </div>
  );
}

export default EnviarResposta;
