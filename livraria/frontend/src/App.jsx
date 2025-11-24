import { useEffect, useState } from "react";
import { livrosServices } from "./services/livrosServices";

export default function App() {
  const [livros, setLivros] = useState([]);

  const carregarLivros = async () => {
    const resposta = await livrosServices.listar();
    setLivros(resposta);
  };

  useEffect(() => {
    carregarLivros();
  }, []);

  return (
    <div>
      <h1>Lista de Livros</h1>
      <ul>
        {livros.map((livro) => (
          <li key={livro.id}>
              {livro.titulo} - {livro.autor}
          </li>
        ))}
      </ul>
    </div>
  );
}