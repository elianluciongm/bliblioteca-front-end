import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import TituloCadastro from "../componentes/TituloCadastro";

export default function FormEditora() {
  const navegacao = useNavigate();
  const { id } = useParams();

  const [nomeeditora, setNomeEditora] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [endereco, setEndereco] = useState('');

  const selecionar = async () => {
    const { data } = await axios.get(`http://localhost:4000/editora/${id}`);
    setNomeEditora(data.nomeeditora);
    setCnpj(data.cnpj);
    setEndereco(data.endereco);
  };

  useEffect(() => {
    if (id) {
      selecionar();
    }
  }, [id]);

  const alterar = async () => {
    const body = {
      nomeeditora,
      cnpj,
      endereco,
    };
    await axios.put(`http://localhost:4000/editora/${id}`, body);
    voltar();
  };

  const inserir = async () => {
    const body = {
      nomeeditora,
      cnpj,
      endereco,
    };
    await axios.post("http://localhost:4000/editora", body);
    voltar();
  };

  const salvar = async (e) => {
    e.preventDefault();
    if (id) {
      await alterar();
    } else {
      await inserir();
    }
  };

  const excluir = async () => {
    await axios.delete(`http://localhost:4000/editora/${id}`);
    voltar();
  };

  const voltar = () => {
    navegacao("/listaeditora");
  };

  return (
    <>
      <div className="container mt-4">
        <TituloCadastro id={id} titulo="Editora" />
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
                    readOnly
                  />
                </div>
              )}
              <div className="mb-3">
                <label className="form-label">Nome da Editora</label>
                <input
                  type="text"
                  className="form-control"
                  value={nomeeditora}
                  onChange={(e) => setNomeEditora(e.target.value)}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">CNPJ</label>
                <input
                  type="text"
                  className="form-control"
                  value={cnpj}
                  onChange={(e) => setCnpj(e.target.value)}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Endereço</label>
                <input
                  type="text"
                  className="form-control"
                  value={endereco}
                  onChange={(e) => setEndereco(e.target.value)}
                  required
                />
              </div>

              <div className="d-flex gap-2">
                <button type="submit" className="btn btn-primary">
                  Salvar
                </button>
                {id && (
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={excluir}
                  >
                    Excluir
                  </button>
                )}
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={voltar}
                >
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
