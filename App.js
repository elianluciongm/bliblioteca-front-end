import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import Categorias from './componentes/Categorias';
import Menu from './componentes/Menu';
import FormCategoria from './paginas/FormCategoria';
import Home from './paginas/Home';
import ListaCategoria from './paginas/ListaCategoria';
import Cadastro from './componentes/Cadastro';
import ListaAutor from './paginas/ListaAutor';
import FormAutor from './paginas/FormAutor';
import FormLivros from './paginas/FormLivros';
import ListaLivros from './paginas/ListaLivros';
import FormEditora from './paginas/FormEditora';
import ListaEditora from './paginas/ListaEditora';
import ListaUsuario from './paginas/ListaUsuario';
import FormUsuario from './paginas/FormUsuario';
import ListaFuncionario from './paginas/ListaFuncionario';
import FormFuncionario from './paginas/FormFuncionario';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Menu />

        {/* 2 – Editora requisitos */}
        {/* 2 – Usuários Requsitos */}
        {/* 2 – Funcionários Requisitos */}
        {/* 3 – Acervo de livros */}


        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='*' element={<Home />} />
          <Route path='/cadastro' element={<Cadastro />} />
          <Route path='/listacategoria' element={<ListaCategoria />} />
          <Route path='/cadastrocategoria' element={<FormCategoria />} />
          <Route path='/cadastrocategoria/:id' element={<FormCategoria />} />

          <Route path='/listaautor' element={<ListaAutor />} />
          <Route path='/cadastroautor' element={<FormAutor />} />
          <Route path='/cadastroautor/:id' element={<FormAutor />} />

          <Route path='/listalivro' element={<ListaLivros />} />
          <Route path='/cadastrolivro' element={<FormLivros />} />
          <Route path='/cadastrolivro/:id' element={<FormLivros />} />

          <Route path='/listaeditora' element={<ListaEditora />} />
          <Route path='/cadastroeditora' element={<FormEditora />} />
          <Route path='/cadastroeditora/:id' element={<FormEditora />} />

          <Route path='/listausuario' element={<ListaUsuario />} />
          <Route path='/cadastrousuario' element={<FormUsuario />} />
          <Route path='/cadastrousuario/:id' element={<FormUsuario />} />

          <Route path='/listafuncionario' element={<ListaFuncionario />} />
          <Route path='/cadastrofuncionario' element={<FormFuncionario />} />
          <Route path='/cadastrofuncionario/:id' element={<FormFuncionario />} />




          <Route path='*' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
