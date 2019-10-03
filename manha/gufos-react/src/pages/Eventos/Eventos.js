import React,{Component} from 'react';

import Rodape from '../../components/Rodape/Rodope';

import logo from '../../assets/img/icon-login.png';
import Axios from 'axios';

import Titulo from '../../components/Titulo/Titulo';

export default class Eventos extends Component{

    constructor(){
        super();
        this.state = {
            lista: []
        };
    }

    componentDidMount(){
        Axios.get('http://192.168.7.85:5000/api/eventos')
            .then(data => {
                this.setState({lista: data.data});
            })
            .catch(erro => {
                console.log(erro);
            });
    }

    render(){
        return(
            <div>
                <header className="cabecalhoPrincipal">
                    <div className="container">
                    <img src={logo} />

                    <nav className="cabecalhoPrincipal-nav">
                        Administrador
                    </nav>
                    </div>
                </header>

                <main className="conteudoPrincipal">
                    <section className="conteudoPrincipal-cadastro">
                        <Titulo titulo="Eventos" />
                        {/* <h1 className="conteudoPrincipal-cadastro-titulo">Eventos</h1> */}
                        <div className="container" id="conteudoPrincipal-lista">

                            <table id="tabela-lista">
                            <thead>
                                <tr>
                                <th>#</th>
                                <th>Evento</th>
                                <th>Data</th>
                                <th>Acesso Livre</th>
                                <th>Tipo do Evento</th>
                                </tr>
                            </thead>

                            <tbody id="tabela-lista-corpo">
                                {
                                    this.state.lista.map(element =>{
                                        return(
                                            <tr>
                                                <td>{element.idEvento}</td>
                                                <td>{element.titulo}</td>
                                                <td>{element.dataEvento}</td>
                                                <td>{element.ativo ? 'ativo' : 'inativo'}</td>
                                                <td>{element.idCategoriaNavigation.nome}</td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                            </table>
                        </div>

                    <div className="container" id="conteudoPrincipal-cadastro">
                        <h2 className="conteudoPrincipal-cadastro-titulo">Cadastrar Evento</h2>
                        <div className="container">

                        <input type="text" id="evento__titulo" placeholder="título do evento" />
                        <input type="text" id="evento__localizacao" placeholder="localização" />
                        <input type="text" id="evento__data" placeholder="dd/MM/yyyy" />
                        <select id="option__acessolivre">
                            <option value="1">Ativo</option>
                            <option value="0">Desativo</option>
                        </select>
                        <select id="option__tipoevento">
                            <option value="0" disabled>Categoria do Evento</option>
                        </select>
                        <textarea rows="3" cols="50" placeholder="descrição do evento" id="evento__descricao"></textarea>

                        </div>
                        <button className="conteudoPrincipal-btn conteudoPrincipal-btn-cadastro">Cadastrar</button>
                    </div>
                    
                    </section>
                </main>

                <Rodape />
                
            </div>
        );
    }
}

// export default Eventos;