import TituloLista from "../componentes/TituloLista";
import axios from "axios";
import { useState, useEffect } from "react";

export default function ListaCategoria() {
  // Declarando uma variavel useState
  const [dados, setDados] = useState([]);

  const listar = async () => {
    let { data } = await axios.get(`http://localhost:4000/categoria`);
    console.log(data);
    setDados(data);
  }  

  useEffect(() => {
    listar();
  }, []);

  return (
    <>
      <TituloLista
        titulo="Categorias"
        descrição="Gerencie aqui as categorias dos livros da biblioteca"
        rota="/cadastrocategoria"
        botao="Nova Categoria"
      />

      <div className="container">
        <div className="row">
          <div className="col">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Alterar</th>
                  <th scope="col">Código</th>
                  <th scope="col">Categoria</th>
                </tr>
              </thead>
              <tbody>
                {dados.map((d, i) => (
                  <tr key={d.idcategoria}>
                    <td>
                      <a className="btn btn-primary" href={`/cadastrocategoria/${d.idcategoria}`}>
                        Alterar
                      </a>
                    </td>
                    <td>{d.idcategoria}</td>
                    <td>{d.nomecategoria}</td>
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
