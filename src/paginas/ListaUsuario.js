import TituloLista from "../componentes/TituloLista";
import axios from "axios";
import { useState, useEffect } from "react";

export default function ListaUsuario() {
  // Declarando uma variavel useState
  const [dados, setDados] = useState([]);

  const listar = async () => {
    let { data } = await axios.get(`http://localhost:4000/usuario`);
    setDados(data);
  }

  useEffect(() => {
    listar();
  }, []);

  return (
    <>
      <TituloLista
        titulo="Usuarios"
        descrição="Gerencie aqui os usuarios da biblioteca"
        rota="/cadastrousuario"
        botao="Novo Usuario"
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
                  <th scope="col">CPF</th>
                  <th scope="col">E-mail</th>
                  <th scope="col">Telefone</th>
                  <th scope="col">Senha</th>
                </tr>
              </thead>
              <tbody>
                {dados.map((d, i) => (
                  <tr key={d.idusuario}>
                    <td>
                      <a className="btn btn-primary" href={`/cadastrousuario/${d.idusuario}`}>
                        Alterar
                      </a>
                    </td>
                    <td>{d.idusuario}</td>
                    <td>{d.nome}</td>
                    <td>{d.nascimento}</td>
                    <td>{d.cpf}</td>
                    <td>{d.email}</td>
                    <td>{d.telefone}</td>
                    <td>{d.senha}</td>
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
