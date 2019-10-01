import React, { Component } from "react";

import Axios from 'axios';

import logo from '../../assets/img/icon-login.png'

export default class Login extends Component {

    constructor() {
        super();
        this.state = {
            email: "",
            senha: "",
            erro: ""
        }
    }

    mudarEstadoEmail = (event) =>{
        this.setState({email: event.target.value})
    }

    mudarEstadoSenha = (event) =>{
        this.setState({senha: event.target.value})
    }

    efetuarLogin = (event) =>{
        event.preventDefault();
        
        Axios.post("http://192.168.7.85:5000/api/login", {
            email: this.state.email,
            senha: this.state.senha
        })
            .then(data =>{
                if(data.status === 200){
                    // console.log(data.data);
                    // console.log(data.data.token);
                    localStorage.setItem("usuario-gufos", data.data.token);
                    this.props.history.push('/categorias');
                }else{
                    console.log("Errooooou!")
                }
            })
            .catch(erro => {
                this.setState({erro: "Usuário ou senha inválido"});
                console.log(erro);
            })
    }  

    render() {
        return (
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
                                    type="text"
                                    name="username"
                                    id="login__email"
                                    onChange={this.mudarEstadoEmail}
                                    value={this.state.email}
                                />
                            </div>
                            <div className="item">
                                <input
                                    className="input__login"
                                    placeholder="password"
                                    type="password"
                                    name="password"
                                    id="login__password"
                                    onChange={this.mudarEstadoSenha}
                                    value={this.state.senha}
                                />
                            </div>
                            <div className="item">
                                <button className="btn btn__login" id="btn__login">
                                    Login
                                </button>
                            </div>
                            <p 
                                className="text__login"
                                style={{color: "red", textAlign:"center"}}
                            >
                                {this.state.erro}
                            </p>
                        </form>
                    </div>
                </div>
            </section>
        );
    }
}

