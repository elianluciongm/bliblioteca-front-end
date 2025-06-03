import { useEffect, useState } from "react";
import axios from "axios";

export default function Categorias() {
  const [categorias, setCategorias] = useState([]);
  const [livros, setLivros] = useState([]);
  const [editora, setEditora] = useState([]);

  useEffect(() => {
    Categorias();
    Editora();
    Livros();
  }, []);

  const Categorias = async () => {
    const { data } = await axios.get("http://localhost:4000/categoria");
    setCategorias(data);
  };

  const Livros = async () => {
    const { data } = await axios.get("http://localhost:4000/livro");
    setLivros(data);
  };

  const Editora = async () => {
    const { data } = await axios.get("http://localhost:4000/editora");
    setEditora(data);
  };

  return (
    <>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
        crossOrigin="anonymous"
      />

      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-md-auto mt-4 mx-5">
            {categorias.map((categoria) => (
              <button
                key={categoria.idcategoria}
                type="button"
                className="btn btn-primary me-2 mb-2"
              >
                {categoria.nomecategoria}
              </button>
            ))}
          </div>
        </div>

        <br />

        <div className="row">
          {livros.map((livro) => (
            <div key={livro.idlivro} className="col-md-4">
              <div className="card mb-3" style={{ maxWidth: 540 }}>
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src="./assets/book.jpg"
                      className="img-fluid rounded-start"
                      alt="Livro"
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">Titulo: {livro.titulo}</h5>
                      <p className="card-title">{livro.edicao}</p>
                      <p className="card-text">ID Editora: {livro.ideditora}</p>
                      <p className="card-text"><small className="text-muted">{livro.paginas} páginas</small></p>
                      <p className="card-text"><small className="text-muted">Publicado em: {livro.publicacao}</small></p>
                      <a href="#" className="btn btn-primary">Emprestar</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
