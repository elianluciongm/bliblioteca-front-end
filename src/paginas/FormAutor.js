import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import TituloCadastro from "../componentes/TituloCadastro";

export default function FormAutor() {
  const navegacao = useNavigate();
  const { id } = useParams();

  const [nomeautor, setNomeAutor] = useState('');
  const [nascimento, setNascimento] = useState('');
  const [biografia, setBiografia] = useState('');
  const [nacionalidade, setnacionalidade] = useState('');
  const [foto, setFoto] = useState('');

  const selecionar = async () => {
    const { data } = await axios.get(`http://localhost:4000/autor/${id}`);
    setNomeAutor(data.nomeautor);
    setNascimento(data.nascimento);
    setBiografia(data.biografia);
    setnacionalidade(data.nacionalidade);
    setFoto(data.foto);
  };

  const alterar = async () => {
    const body = {
      nomeautor,
      nascimento,
      biografia,
      nacionalidade,
      foto
    };
    await axios.put(`http://localhost:4000/autor/${id}`, body);
    voltar();
  };

  const inserir = async () => {
    const body = {
      nomeautor,
      nascimento,
      biografia,
      nacionalidade,
      foto
    };
    await axios.post(`http://localhost:4000/autor/`, body);
    voltar();
  };

  const salvar = async () => {
    if (id) {
      await alterar();
    } else {
      await inserir();
    }
  };

  const excluir = async () => {
    await axios.delete(`http://localhost:4000/autor/${id}`);
    voltar();
  };

  const voltar = () => {
    navegacao('/listaautor');
  };

  useEffect(() => {
    if (id) {
      selecionar();
    }
  }, [id]);

  return (
    <div className="container mt-4">
      <TituloCadastro id={id} titulo="Autor" />
      <div className="row mt-4">
        <div className="col-md-6">
          <form onSubmit={(e) => {
            e.preventDefault();
            salvar();
          }}>
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
              <label className="form-label">Nome do autor</label>
              <input
                type="text"
                className="form-control"
                value={nomeautor}
                onChange={(e) => setNomeAutor(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Nascimento</label>
              <input
                type="text"
                className="form-control"
                value={nascimento}
                onChange={(e) => setNascimento(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Biografia</label>
              <input
                type="text"
                className="form-control"
                value={biografia}
                onChange={(e) => setBiografia(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Nacionalidade</label>
              <input
                type="text"
                className="form-control"
                value={nacionalidade}
                onChange={(e) => setnacionalidade(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Foto (URL)</label>
              <input
                type="text"
                className="form-control"
                value={foto}
                onChange={(e) => setFoto(e.target.value)}
              />
            </div>

            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="checkAtivo"
              />
              <label className="form-check-label" htmlFor="checkAtivo">
                Ativo
              </label>
            </div>

            <div className="d-flex gap-2">
              <button type="submit" className="btn btn-primary">
                Salvar
              </button>
              {id && (
                <button type="button" className="btn btn-danger" onClick={excluir}>
                  Excluir
                </button>
              )}
              <button type="button" className="btn btn-secondary" onClick={voltar}>
                Cancelar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
