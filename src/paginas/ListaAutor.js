import TituloLista from "../componentes/TituloLista";
import axios from "axios";
import { useState, useEffect } from "react";

export default function ListaAutor() {
  // Declarando uma variavel useState
  const [dados, setDados] = useState([]);

  const listar = async () => {
    let { data } = await axios.get(`http://localhost:4000/autor`);
    setDados(data);
  }

  useEffect(() => {
    listar();
  }, []);

  return (
    <>
      <TituloLista
        titulo="Autores"
        descrição="Gerencie aqui os autores dos livros da biblioteca"
        rota="/cadastroautor"
        botao="Novo Autor"
      />

      <div className="container">
        <div className="row">
          <div className="col">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Alterar</th>
                  <th scope="col">Código</th>
                  <th scope="col">Nome</th>
                  <th scope="col">Nascimento</th>
                  <th scope="col">Foto</th>

                </tr>
              </thead>
              <tbody>
                {dados.map((d, i) => (
                  <tr>
                    <td>
                      <a className="btn btn-primary" href={`/cadastroautor/${d.idautor}`}>
                        Alterar
                      </a>
                    </td>
                    <td>{d.idautor}</td>
                    <td>{d.nomeautor}</td>
                    <td>{d.nascimento}</td>
                    <td>
                      <img className="img-thumbnail"
                        src={d.foto}
                        style={{ width: '80px' }} />
                    </td>

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
