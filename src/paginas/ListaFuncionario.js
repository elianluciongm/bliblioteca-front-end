import TituloLista from "../componentes/TituloLista";
import axios from "axios";
import { useState, useEffect } from "react";

export default function ListaFuncionario() {
  // Declarando uma variavel useState
  const [dados, setDados] = useState([]);

  const listar = async () => {
    let { data } = await axios.get(`http://localhost:4000/funcionario`);
    setDados(data);
  }

  useEffect(() => {
    listar();
  }, []);

  return (
    <>
      <TituloLista
        titulo="Funcionarios"
        descrição="Gerencie aqui os funcionarios da biblioteca"
        rota="/cadastrofuncionario"
        botao="Novo Funcionario"
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
                  <th scope="col">CPF</th>
                  <th scope="col">E-mail</th>
                  <th scope="col">Telefone</th>
                  <th scope="col">Nascimento</th>
                  <th scope="col">Salario</th>
                  <th scope="col">Contratação</th>
                  <th scope="col">Demissão</th>
                  <th scope="col">Ativo</th>
                  <th scope="col">Senha</th>
                </tr>
              </thead>
              <tbody>
                {dados.map((d, i) => (
                  <tr key={d.idfuncionario}>
                    <td>
                      <a className="btn btn-primary" href={`/cadastrofuncionario/${d.idfuncionario}`}>
                        Alterar
                      </a>
                    </td>
                    <td>{d.idfuncionario}</td>
                    <td>{d.nomefunctionario}</td>
                    <td>{d.cpf}</td>
                    <td>{d.email}</td>
                    <td>{d.telefone}</td>
                    <td>{d.nascimento}</td>
                    <td>{d.salario}</td>
                    <td>{d.contratacao}</td>
                    <td>{d.demissao}</td>
                    <td>{d.ativo}</td>
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
