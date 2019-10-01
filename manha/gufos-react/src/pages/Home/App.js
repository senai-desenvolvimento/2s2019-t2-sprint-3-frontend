import React from 'react';
import './App.css';

//realizar import dos estilos
import '../../assets/css/flexbox.css';
import '../../assets/css/login.css';
import '../../assets/css/style.css';
import '../../assets/css/reset.css';

//imagem 
import logo from '../../assets/img/icon-login.png';

import {Link} from 'react-router-dom';

function App() {

  return (
    <div className="App">
       <div>
        <header className="cabecalhoPrincipal">
          <div className="container">
            <img src={logo} />

            <nav className="cabecalhoPrincipal-nav">
              <a>Home</a>
              <a>Eventos</a>
              <a>Contato</a>
              <Link className="cabecalhoPrincipal-nav-login" to="/login">Login</Link>
            </nav>
          </div>
        </header>

        <section className="conteudoImagem">
          <div>
            <h1>Gufos</h1>
            <h2>Área de eventos da Escola SENAI de Informática.</h2>
          </div>
        </section>

        <main className="conteudoPrincipal">
          <section id="conteudoPrincipal-eventos">
            <h1 id="conteudoPrincipal-eventos-titulo">Opiniões</h1>
            <div className="container">
              <nav>
                <ul className="conteudoPrincipal-dados">
                  <li className="conteudoPrincipal-dados-link eventos">
                    <h2>Pessoa A</h2>
                    <p>
                      Breve descrição sobre a opinião A. Lorem ipsum lorem ipsum
                      lorem ipsum lorem ipsum lorem ipsum.
                    </p>
                    
                  </li>

                  <li className="conteudoPrincipal-dados-link eventos">
                    <h2>Pessoa B</h2>
                    <p>
                      Breve descrição sobre a opinião B. Lorem ipsum lorem ipsum
                      lorem ipsum lorem ipsum lorem ipsum.
                    </p>
                  
                  </li>

                  <li className="conteudoPrincipal-dados-link eventos">
                    <h2>Pessoa C</h2>
                    <p>
                      Breve descrição sobre a opinião C. Lorem ipsum lorem ipsum
                      lorem ipsum lorem ipsum lorem ipsum.
                    </p>
                   
                  </li>

                  <li className="conteudoPrincipal-dados-link eventos">
                    <h2>Pessoa D</h2>
                    <p>
                      Breve descrição sobre a opinião D. Lorem ipsum lorem ipsum
                      lorem ipsum lorem ipsum lorem ipsum.
                    </p>
                    
                  </li>
                </ul>
              </nav>
            </div>
          </section>

          <section id="conteudoPrincipal-visao">
            <h1 id="conteudoPrincipal-visao-titulo">Por Quê Participar?</h1>
            <div className="container">
              <p className="visao-texto">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
                Nullam auctor suscipit eros sed blandit. <br />
                Fusce euismod neque sed dapibus sollicitudin. <br />Duis vel lacus
                vestibulum, molestie dui eu, bibendum nunc.
              </p>
            </div>
          </section>

          <section id="conteudoPrincipal-contato">
            <h1 id="conteudoPrincipal-contato-titulo">Contato</h1>
            <div className="container conteudo-contato-titulo">
              <div className="contato-mapa conteudo-contato-mapa"></div>
              <div className="contato-endereco conteudo-contato-endereco">
                Alameda Barão de Limeira, 539 <br />
                São Paulo - SP
              </div>
            </div>
          </section>
        </main>

        <footer className="rodapePrincipal">
          <section className="rodapePrincipal-patrocinadores">
            <div className="container">
              <p>Escola SENAI de Informática - 2019</p>
            </div>
          </section>
        </footer>
      </div>
    </div>
  );
}

export default App;
