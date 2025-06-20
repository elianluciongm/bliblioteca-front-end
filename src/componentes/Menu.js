import React from 'react';

export default function Menu() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Biblioteca
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/listacategoria">
                  Categorias
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/cadastrocategoria">
                  Cadastro Categoria
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/listaautor">
                  Autores
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/cadastroautor">
                  Cadastro Autor
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/listalivro">
                  Livros
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/cadastrolivro">
                  Cadastro Livro
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/listaeditora">
                  Editora
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/cadastroeditora">
                  Cadastro Editora
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/listausuario">
                  Usuario
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/cadastrousuario">
                  Cadastro Usuario
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/listafuncionario">
                  Funcionario
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/cadastrofuncionario">
                  Cadastro Funcionario
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
