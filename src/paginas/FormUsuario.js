import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import TituloCadastro from "../componentes/TituloCadastro";

export default function FormUsuario() {
  const navegacao = useNavigate();
  const { id } = useParams();

  const [nome, setNome] = useState('');
  const [nascimento, setNascimento] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('')
  const [senha, setSenha] = useState('');



  const selecionar = async () => {
    let { data } = await axios.get(`http://localhost:4000/usuario/${id}`);
    setNome(data.nome);
    setNascimento(data.nascimento);
    setCpf(data.cpf);
    setEmail(data.email);
    setTelefone(data.telefone);
    setSenha(data.senha);
  };

  const voltar = () => {
    navegacao('/listausuario');
  }


  const alterar = async () => {
    let body = {
      nome,
      nascimento,
      cpf,
      email,
      telefone,
      senha,
    };
    await axios.put(`http://localhost:4000/usuario/${id}`, body);
    voltar();
  }

  const inserir = async () => {
    let body = {
      nome,
      nascimento,
      cpf,
      email,
      telefone,
      senha
    };
    await axios.post(`http://localhost:4000/usuario/`, body);
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
    await axios.delete(`http://localhost:4000/usuario/${id}`);
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
        <TituloCadastro id={id} titulo="Usuario" />
        <div className="row mt-4">
          <div className="col-md-6">
            <form onSubmit={salvar}>
              {id && (
                <div className="mb-3">
                  <label className="form-label">Código</label>
                  <input
                    type="text"
                    className="form-control"
                    value={id}
                    disabled
                  />
                </div>
              )}
              <div className="mb-3">
                <label className="form-label">Nome</label>
                <input
                  type="text"
                  className="form-control"
                  value={nome}
                  onChange={(evento) => setNome(evento.target.value)}
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
                <label className="form-label">Telefone</label>
                <input
                  type="text"
                  className="form-control"
                  value={telefone}
                  onChange={(evento) => setTelefone(evento.target.value)}
                />
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
