import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import TituloCadastro from "../componentes/TituloCadastro";

export default function FormFuncionario() {
  const navegacao = useNavigate();
  const { id } = useParams();

  const [idfuncionario, setIdFuncionario] = useState('');
  const [nomefunctionario, setNomeFunctionario] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [nascimento, setNascimento] = useState('')
  const [salario, setSalario] = useState('');
  const [contratacao, setContratacao] = useState('');
  const [demissao, setDemissao] = useState('');
  const [ativo, setAtivo] = useState(false);
  const [senha, setSenha] = useState('');
  const [token, setToken] = useState('');




  const selecionar = async () => {
    let { data } = await axios.get(`http://localhost:4000/funcionario/${id}`);
    setIdFuncionario(data.idfuncionario);
    setNomeFunctionario(data.nomefunctionario);
    setCpf(data.cpf);
    setEmail(data.email);
    setTelefone(data.telefone);
    setNascimento(data.nascimento);
    setSalario(data.salario);
    setContratacao(data.contratacao);
    setDemissao(data.demissao);
    setAtivo(data.ativo);
    setSenha(data.senha);
    setToken(data.token);
  };

  const voltar = () => {
    navegacao('/listafuncionario');
  }


  const alterar = async () => {
    let body = {
      idfuncionario,
      nomefunctionario,
      cpf,
      email,
      telefone,
      nascimento,
      salario,
      contratacao,
      demissao,
      ativo,
      senha,
      token,
    };
    await axios.put(`http://localhost:4000/funcionario/${id}`, body);
    voltar();
  }

  const inserir = async () => {
    let body = {
      idfuncionario,
      nomefunctionario,
      cpf,
      email,
      telefone,
      nascimento,
      salario,
      contratacao,
      demissao,
      ativo,
      senha,
      token,
    };
    await axios.post(`http://localhost:4000/funcionario/`, body);
    voltar();
  }

  const salvar = async (event) => {
    event.preventDefault();
    if (id) {
      await alterar();
    } else {
      await inserir();
    }
  }

  const excluir = async () => {
    await axios.delete(`http://localhost:4000/funcionario/${id}`);
    voltar();
  }

  useEffect(() => {
    if (id) {
      selecionar();
    }
  }, []);

  return (
    <>
      <div className="container mt-4">
        <TituloCadastro id={id} titulo="Funcionario" />
        <div className="row mt-4">
          <div className="col-md-6">
            <form onSubmit={salvar}>
              {id && (
                <div className="mb-3">
                  <label className="form-label">Código</label>
                  <input
                    type="text"
                    className="form-control"
                    value={idfuncionario}
                    disabled
                  />
                </div>
              )}
              <div className="mb-3">
                <label className="form-label">Nome</label>
                <input
                  type="text"
                  className="form-control"
                  value={nomefunctionario}
                  onChange={(evento) => setNomeFunctionario(evento.target.value)}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">CPF</label>
                <input
                  type="text"
                  className="form-control"
                  value={cpf}
                  onChange={(evento) => setCpf(evento.target.value)}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">E-mail</label>
                <input
                  type="text"
                  className="form-control"
                  value={email}
                  onChange={(evento) => setEmail(evento.target.value)}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">telefone</label>
                <input
                  type="text"
                  className="form-control"
                  value={telefone}
                  onChange={(evento) => setTelefone(evento.target.value)}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Nascimento</label>
                <input
                  type="text"
                  className="form-control"
                  value={nascimento}
                  onChange={(evento) => setNascimento(evento.target.value)}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Salario</label>
                <input
                  type="text"
                  className="form-control"
                  value={salario}
                  onChange={(evento) => setSalario(evento.target.value)}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Contratação</label>
                <input
                  type="text"
                  className="form-control"
                  value={contratacao}
                  onChange={(evento) => setContratacao(evento.target.value)}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Demissão</label>
                <input
                  type="text"
                  className="form-control"
                  value={demissao}
                  onChange={(evento) => setDemissao(evento.target.value)}
                />
              </div>

              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="checkativo"
                  checked={ativo}
                  onChange={(e) => setAtivo(e.target.checked)}
                />
                <label className="form-check-label" htmlFor="checkAtivo">
                  Ativo
                </label>
              </div>

              <div className="mb-3">
                <label className="form-label">Senha</label>
                <input
                  type="text"
                  className="form-control"
                  value={senha}
                  onChange={(evento) => setSenha(evento.target.value)}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Token</label>
                <input
                  type="text"
                  className="form-control"
                  value={token}
                  onChange={(evento) => setToken(evento.target.value)}
                />
              </div>

              <div className="d-flex gap-2">
                <button type="submit" className="btn btn-primary">
                  Salvar
                </button>
                {id && (
                  <button type="button" className="btn btn-danger"
                    onClick={excluir}>
                    Excluir
                  </button>
                )}
                <button type="button" className="btn btn-secondary"
                  onClick={voltar}>
                  Cancelar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
