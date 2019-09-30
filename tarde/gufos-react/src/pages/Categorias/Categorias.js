import React,{Component} from "react";

//imagem
import logo from '../../assets/img/icon-login.png';

//component
import Rodape from '../../components/Rodape';

class Categorias extends Component{

    constructor(){
        super();
        this.state = {
            lista: [
                // {idCategoria: 1, nome: 'Design'},
                // {idCategoria: 2, nome: 'Jogos'},
                // {idCategoria: 3, nome: 'Meetup'}
            ]
        }
    }

    componentDidMount(){
        fetch('http://192.168.7.85:5000/api/categorias')
            .then(response => response.json())
            .then(data => this.setState({lista: data}));   
    }

    adicionaItem = (event) =>{
        event.preventDefault();
        
        let lista = {idCategoria: 4, nome: 'Nova categoria'};
        let lista_state = this.state.lista;

        lista_state.push(lista);
        console.log(lista_state);

        this.setState({lista: lista_state});
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
                    <h1 className="conteudoPrincipal-cadastro-titulo">Categorias</h1>
                    <div className="container" id="conteudoPrincipal-lista">
                        <table id="tabela-lista">
                        <thead>
                            <tr>
                            <th>#</th>
                            <th>Título</th>
                            </tr>
                        </thead>

                        <tbody id="tabela-lista-corpo">
                            {this.state.lista.map(element =>{
                                return(
                                    <tr key={element.idCategoria}>
                                        <td>{element.idCategoria}</td>
                                        <td>{element.nome}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                        </table>
                    </div>

                    <div className="container" id="conteudoPrincipal-cadastro">
                        <h2 className="conteudoPrincipal-cadastro-titulo">
                        Cadastrar Categoria
                        </h2>
                        <form>
                        <div className="container">
                            <input
                            type="text"
                            className="className__categoria"
                            id="input__categoria"
                            placeholder="tipo do evento"
                            />
                            <button
                            id="btn__cadastrar"
                            className="conteudoPrincipal-btn conteudoPrincipal-btn-cadastro"
                            onClick={this.adicionaItem}
                            >
                            Cadastrar
                            </button>
                        </div>
                        </form>
                    </div>
                    </section>
                </main>

                <Rodape />

                </div>
        );
    }
}

export default Categorias;