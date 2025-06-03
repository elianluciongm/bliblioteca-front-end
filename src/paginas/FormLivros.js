import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import TituloCadastro from "../componentes/TituloCadastro";

export default function FormLivros() {
  const navegacao = useNavigate();
  const { id } = useParams();

  const [titulo, setTitulo] = useState('');
  const [edicao, setEdicao] = useState('');
  const [paginas, setPaginas] = useState('');
  const [publicacao, setPublicacao] = useState('');
  const [localizacao, setLocalizacao] = useState('')
  const [resumo, setResumo] = useState('');
  const [ativo, setAtivo] = useState(true);
  const [condicaofisica, setCondicaoFisica] = useState('');
  const [emprestado, setEmprestado] = useState(false);
  const [ideditora, setIdEditora] = useState('');
  const [idcategoria, setIdCategoria] = useState('');

  const selecionar = async () => {
    let { data } = await axios.get(`http://localhost:4000/livro/${id}`);
    setTitulo(data.titulo);
    setEdicao(data.edicao);
    setPaginas(data.paginas);
    setPublicacao(data.publicacao);
    setLocalizacao(data.localizacao);
    setResumo(data.resumo);
    setAtivo(data.ativo);
    setCondicaoFisica(data.condicaofisica);
    setEmprestado(data.emprestado);
    setIdEditora(data.ideditora);
    setIdCategoria(data.idcategoria);
  };

  const voltar = () => {
    navegacao('/listalivro');
  }


  const alterar = async () => {
    let body = {
      titulo,
      edicao,
      paginas,
      publicacao,
      localizacao,
      resumo,
      ativo,
      condicaofisica,
      emprestado,
      ideditora,
      idcategoria
    };
    await axios.put(`http://localhost:4000/livro/${id}`, body);
    voltar();
  }

  const inserir = async () => {
    let body = {
      titulo,
      edicao,
      paginas,
      publicacao,
      localizacao,
      resumo,
      ativo,
      condicaofisica,
      emprestado,
      ideditora,
      idcategoria
    };
    await axios.post(`http://localhost:4000/livro/`, body);
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
    await axios.delete(`http://localhost:4000/livro/${id}`);
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
        <TituloCadastro id={id} titulo="Livro" />
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
                <label className="form-label">Título</label>
                <input
                  type="text"
                  className="form-control"
                  value={titulo}
                  onChange={(evento) => setTitulo(evento.target.value)}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Edição</label>
                <input
                  type="text"
                  className="form-control"
                  value={edicao}
                  onChange={(evento) => setEdicao(evento.target.value)}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Páginas</label>
                <input
                  type="text"
                  className="form-control"
                  value={paginas}
                  onChange={(evento) => setPaginas(evento.target.value)}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Publicação</label>
                <input
                  type="text"
                  className="form-control"
                  value={publicacao}
                  onChange={(evento) => setPublicacao(evento.target.value)}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Localização</label>
                <input
                  type="text"
                  className="form-control"
                  value={localizacao}
                  onChange={(evento) => setLocalizacao(evento.target.value)}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Resumo</label>
                <input
                  type="text"
                  className="form-control"
                  value={resumo}
                  onChange={(evento) => setResumo(evento.target.value)}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Condição Fisica</label>
                <input
                  type="text"
                  className="form-control"
                  value={condicaofisica}
                  onChange={(evento) => setCondicaoFisica(evento.target.value)}
                />
              </div>

              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="checkEmprestado"
                  checked={emprestado}
                  onChange={(e) => setEmprestado(e.target.checked)}
                />
                <label className="form-check-label" htmlFor="checkEmprestado">
                  Emprestado
                </label>
              </div>

              <div className="mb-3">
                <label className="form-label">ID Editora</label>
                <input
                  type="text"
                  className="form-control"
                  value={ideditora}
                  onChange={(evento) => setIdEditora(evento.target.value)}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">ID Categoria</label>
                <input
                  type="text"
                  className="form-control"
                  value={idcategoria}
                  onChange={(evento) => setIdCategoria(evento.target.value)}
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
