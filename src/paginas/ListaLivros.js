import TituloLista from "../componentes/TituloLista";
import axios from "axios";
import { useState, useEffect } from "react";

export default function ListaLivros() {
  // Declarando uma variavel useState
  const [dados, setDados] = useState([]);

  const listar = async () => {
    let { data } = await axios.get(`http://localhost:4000/livro`);
    console.log(data);
    setDados(data);
  }

  useEffect(() => {
    listar();
  }, []);

  return (
    <>
      <TituloLista
        titulo="Livros"
        descrição="Gerencie aqui os livros da biblioteca"
        rota="/cadastrolivro"
        botao="Novo Livro"
      />
      <div className="container">
        <div className="row">
          <div className="col">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Alterar</th>
                  <th scope="col">Código</th>
                  <th scope="col">Edição</th>
                  <th scope="col">Páginas</th>
                  <th scope="col">Titulo</th>
                </tr>
              </thead>
              <tbody>
                {dados.map((d, i) => (
                  <tr key={d.idlivro}>
                    <td>
                      <a className="btn btn-primary" href={`/cadastrolivro/${d.idlivro}`}>
                        Alterar
                      </a>
                    </td>
                    <td>{d.idlivro}</td>
                    <td>{d.edicao}</td>
                    <td>{d.paginas}</td>
                    <td>{d.titulo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
