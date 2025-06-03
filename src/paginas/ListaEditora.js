import TituloLista from "../componentes/TituloLista";
import axios from "axios";
import { useState, useEffect } from "react";

export default function ListaEditora() {
  // Declarando uma variavel useState
  const [dados, setDados] = useState([]);

  const listar = async () => {
    let { data } = await axios.get(`http://localhost:4000/editora`);
    console.log(data);
    setDados(data);
  }

  useEffect(() => {
    listar();
  }, []);

  return (
    <>
      <TituloLista
        titulo="Editora"
        descrição="Gerencie aqui as editoras da biblioteca"
        rota="/cadastroeditora"
        botao="Nova Editora"
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
                  <th scope="col">CNPJ</th>
                  <th scope="col">Endereço</th>
                </tr>
              </thead>
              <tbody>
                {dados.map((d, i) => (
                  <tr key={d.editora}>
                    <td>
                      <a className="btn btn-primary" href={`/cadastroeditora/${d.ideditora}`}>
                        Alterar
                      </a>
                    </td>
                    <td>{d.ideditora}</td>
                    <td>{d.nomeeditora}</td>
                    <td>{d.cnpj}</td>
                    <td>{d.endereco}</td>
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
