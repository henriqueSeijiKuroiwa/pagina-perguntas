export default function Navbar() {
  return (
    <nav className="bg-blue-400 text-white p-4 shadow-lg">
      <div className="w-auto mx-auto flex justify-between items-center">
        {/* Logo ou Nome do Site */}
        <h1 className="text-3xl font-bold">RoleTeste</h1>

        {/* Links de Navegação */}
        {/*}
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="hover:underline">Início</Link>
          </li>
          <li>
            <Link to="/quiz" className="hover:underline">Quiz</Link>
          </li>
          <li>
            <Link to="/sobre" className="hover:underline">Sobre</Link>
          </li>
        </ul>
        */}
      </div>
    </nav>
  );
}