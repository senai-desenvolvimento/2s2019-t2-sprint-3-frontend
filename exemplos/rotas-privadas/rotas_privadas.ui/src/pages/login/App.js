import React,{Component} from 'react';
import logo from '../../assets/img/icon-login.png';

import '../../assets/css/flexbox.css';
import '../../assets/css/login.css';
import '../../assets/css/reset.css';
import '../../assets/css/style.css';
import Axios from 'axios';

class App extends Component{
  
  constructor(){
    super();
    this.state = {
      login: "",
      senha: "",
      erro: ""
    }
  } 

  
  mudaLogin = (event) =>{
    this.setState({login: event.target.value});
  }

  mudaSenha = (event) =>{
    this.setState({senha: event.target.value});    
  }

  submitFormulario = (event) =>{
    event.preventDefault();
    Axios.post('http://192.168.7.85:5000/api/login',{
      email: this.state.login,
      senha: this.state.senha
    })
    .then(data => {
      localStorage.setItem("usuario-gufos",data.data.token);
      this.props.history.push('/categorias');
    })
  }

  render(){
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
          <form onSubmit={this.submitFormulario}>
            <div className="item">
              <input
                className="input__login"
                placeholder="username"
                type="text"
                name="username"
                id="login__email"
                value={this.state.login}
                onChange={this.mudaLogin}
              />
            </div>
            <div className="item">
              <input
                className="input__login"
                placeholder="password"
                type="password"
                name="password"
                id="login__password"
                value={this.state.senha}
                onChange={this.mudaSenha}
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

export default App;
