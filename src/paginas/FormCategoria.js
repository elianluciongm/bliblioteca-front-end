import { use } from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import TituloCadastro from "../componentes/TituloCadastro";

export default function FormCategoria() {

  const navegacao = useNavigate();

  const excluir = async () => {
    await axios.delete(`http://localhost:4000/categoria/${id}`);
    voltar();
  }

  useEffect(()=>{
    if (id){
      selecionar();
    }
  }, []);

  const selecionar = async () => {
    let { data } = await axios.get(`http://localhost:4000/categoria/${id}`);
    setNomeCategoria(data.nomecategoria);
  }

  const alterar = async () => {
    let body = {
      "nomecategoria" : nomecategoria
    }
    await axios.put(`http://localhost:4000/categoria/${id}`, body);
    voltar();
  }

  const inserir = async () => {
    let body = {
      "nomecategoria" : nomecategoria
    }
    await axios.post(`http://localhost:4000/categoria/`, body);
    voltar();
  }

  const salvar = async () => {
    if (id){
      alterar();
      voltar();
    }
    
    else{
      inserir();
      voltar();
    }
  }
  

  const { id } = useParams();
  const [nomecategoria, setNomeCategoria] = useState('');

  const voltar = () => {
    navegacao('/listacategoria');
  };

  return (
    <>
      <div className="container mt-4">
        <TituloCadastro id={id} titulo="Categoria"/>
        <div className="row mt-4">
          <div className="col-md-6">
            <form>
              {id && (
              <div className="mb-3">
                <label className="form-label">Código</label>
                <input
                  type="text"
                  className="form-control"
                  value={id}/>
              </div>
              )}
              <div className="mb-3">
                <label className="form-label">Nome da Categoria</label>
                <input
                  type="text"
                  className="form-control"
                  value={nomecategoria}
                  onChange={(evento) => setNomeCategoria(evento.target.value)}
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
                <button type="submit" className="btn btn-primary"
                  onClick={() => salvar()}>
                  Salvar
                </button>
                {id && (
                <button type="button" className="btn btn-danger"
                  onClick={() => excluir()}>
                  Excluir
                </button>)}
                  <button type="button" className="btn btn-secondary"
                    onClick={() => voltar()}>
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

