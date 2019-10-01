import React,{Component} from 'react';

import logo from '../../assets/img/icon-login.png';

//axios
import Axios from 'axios';

class Login extends Component{

    constructor(){
        super();
        this.state = {
            email: "",
            senha: "",
            erro: ""
        }
    }

    atualizaEstadoEmail = (event) =>{
        this.setState({email: event.target.value});
    }

    atualizaEstadoSenha = (event) =>{
        this.setState({senha: event.target.value});
    }
    
    efetuarLogin = (event) =>{
        event.preventDefault();
        
        Axios.post("http://192.168.7.85:5000/api/login", {
            email: this.state.email, 
            senha: this.state.senha
        })
            .then(response =>{
                if(response.status === 200){
                    console.log(response.data.token);
                    localStorage.setItem("usuario-gufos",response.data.token);
                    this.props.history.push('/categorias');
                }else{
                    console.log('vish deu ruim');
                }
            })
            .catch(erro => { 
                this.setState({ erro: "Usuário ou senha inválidos"});
                console.log(erro);
            });
    }

    render(){
        return(
        <section className="container flex">
            <div className="img__login"><div className="img__overlay"></div></div>

            <div className="item__login">
                <div className="row">
                <div className="item">
                    <img src={logo} className="icone__login" />
                </div>
                <div className="item" id="item__title">
                    <p className="text__login" id="item__description">
                    Bem-vindo! Faça login para acessar sua conta.
                    </p>
                </div>
                <form onSubmit={this.efetuarLogin}>
                    <div className="item">
                    <input
                        className="input__login"
                        placeholder="username"
                        onInput={this.atualizaEstadoEmail}
                        type="text"
                        name="username"
                        id="login__email"
                    />
                    <p 
                        className="text__login"
                        style={{color: "red", textAlign: "center"}}
                    >
                        {this.state.erro}
                    </p>
                    </div>
                    <div className="item">
                    <input
                        className="input__login"
                        onInput={this.atualizaEstadoSenha}
                        placeholder="password"
                        type="password"
                        name="password"
                        id="login__password"
                    />
                    </div>
                    <div className="item">
                    <button className="btn btn__login" id="btn__login">
                        Login
                    </button>
                    </div>
                </form>
                </div>
            </div>
            </section>
        );
    }

}

export default Login;