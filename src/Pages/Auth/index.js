import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import imgUp from "../../assets/imgUp.png";
import imgDown from "../../assets/imgDown.png";
import { api } from "../../utils/api";
<<<<<<< HEAD
import { FaEye, FaEyeSlash } from "react-icons/fa";
=======
>>>>>>> 077dce8ecbef27b1a2105984fe9c917e3d5de3c2

function Form() {
  const navigate = useNavigate();
  const [isRegister, setIsRegister] = useState(false);
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
<<<<<<< HEAD
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
=======
>>>>>>> 077dce8ecbef27b1a2105984fe9c917e3d5de3c2

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("/auth/login", {
        email,
        senha,
      });
<<<<<<< HEAD
      if (response.status >= 200 && response.status < 300) {
=======
      if ((response.message = "success")) {
>>>>>>> 077dce8ecbef27b1a2105984fe9c917e3d5de3c2
        navigate("/Dashboard");
      } else {
        console.error("Falha no login: ", response.statusText);
      }
    } catch (error) {
      console.error("Erro ao enviar os dados:", error);
    }
    console.log("Email:", email);
    console.log("Senha:", senha);
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    try {
      if (senha !== confirmarSenha) {
        console.error("As senhas não coincidem.");
        return;
      }
<<<<<<< HEAD
      const response = await api.post("/users/register", {
=======
      const response = await api.post("/register", {
>>>>>>> 077dce8ecbef27b1a2105984fe9c917e3d5de3c2
        email,
        senha,
      });

      console.log(response.data);
      if (response.status >= 200 && response.status < 300) {
        console.log("registro bem-sucedido!");
<<<<<<< HEAD
        navigate("/dashboard");
=======
        navigate("/Dash");
>>>>>>> 077dce8ecbef27b1a2105984fe9c917e3d5de3c2
      } else {
        console.error("Falha no registro: ", response.statusText);
      }
    } catch (error) {
      console.error("Erro ao enviar os dados:", error);
    }
    console.log("Email:", email);
    console.log("Senha:", senha);
    console.log("Confirmar Senha:", confirmarSenha);
  };

  const handleCheckboxChange = () => {
    setIsRegister(!isRegister);
    setEmail("");
    setSenha("");
    setConfirmarSenha("");
  };

  return (
    <section className="container">
      <div className="imgBaixo">
        <img src={imgUp} alt="imagem"></img>
      </div>
      <div>
        <div className="section login-SingUp">
          <h6 className="login-SignUp">
            <span>Entrar</span>
            <span>Registrar</span>
          </h6>
          <input
            className="checkbox"
            type="checkbox"
            id="reg-log"
            name="reg-log"
            checked={isRegister}
            onChange={handleCheckboxChange}
          ></input>
          <label htmlFor="reg-log"></label>
          <div className="card-3d-wrap">
            <div className="card-3d-wrapper">
              <form
                onSubmit={isRegister ? handleRegisterSubmit : handleLoginSubmit}
                className="form"
              >
                <div className={`card-${isRegister ? "back" : "front"}`}>
                  <div className="center-wrap">
                    <div className="section">
                      <img src={logo} className="logo" alt="logo"></img>
                      <h1 className="titulo">
                        {isRegister ? "Registre-se" : "Login"}
                      </h1>
                      <div className="input-wrapper">
                        <input
                          className="form-style"
                          placeholder="Insira seu e-mail"
                          type="text"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                      <div className="input-wrapper">
                        <input
                          placeholder="Insira sua senha"
                          type={showPassword ? "text" : "password"}
                          value={senha}
                          onChange={(e) => setSenha(e.target.value)}
                        />
                        <span
                          onClick={toggleShowPassword}
                          className="showPassword"
                        >
                          {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </span>
                      </div>
                      {isRegister && (
                        <div className="input-wrapper">
                          <input
                            placeholder="Confirme sua senha"
                            type={showPassword ? "text" : "password"}
                            value={confirmarSenha}
                            onChange={(e) => setConfirmarSenha(e.target.value)}
                          />
                        
                        </div>
                      )}
                      <button className="btn" type="submit">
                        {isRegister ? "Registrar" : "Continuar"}
                      </button>
                      {!isRegister && (
                        <div className="forgotPassword_container">
                          <a href="#" className="forgotPassword">
                            Esqueceu sua senha?
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="imgCima">
        <img src={imgDown} alt="imagem"></img>
      </div>
    </section>
  );
}

export default Form;
