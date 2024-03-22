import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { API } from "./../../components/axios/api";
import '../../pages/Account/_login.scss'

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInput = (event) => {
    const { id, value } = event.target;

    setFormData({
      //se ponen los ... para que se almacenen y no recargue sin guardar. Formadata es email y password, y una vez que se escriban nuevos los anteriores se guarden
      ...formData,
      // el valor se guarda en el [id], por eso se pone en corchetes, correspondiente de (email/password). el id tomar el valor del value
      [id]: value,
    });
  };

  const userLogin = async (event) => {
    event.preventDefault();
    try {
      const result = await API.post("users/login", formData);
      localStorage.setItem("user", JSON.stringify("user"), result.data.getUser);
      localStorage.setItem("user_id", JSON.stringify(result.data.getUser._id));
      //   //console.log(result.data.getUser._id);
      localStorage.setItem("token", result.data.token);
      //console.log('Token establecido correctamente:', localStorage.getItem('token'), 'User:', localStorage.getItem('user'));

      navigate("/"); //CAMBIAR A MYAREA O EL LINK QUE SEA
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
    
    <section className="container-login">

      <form className="login-form" onSubmit={userLogin}>
        <div className="form-info">
          <label>Email</label>
          <input onChange={handleInput} type="email" id="email" />
        </div>
        <div className="form-info">
          <label>Password</label>
          <input onChange={handleInput} type="password" id="password" />
        </div>

        <div className="login-area">
          <button type="submit" className="login-btn">
            Conectarse
          </button>
          <p className="login-mssg">
            <Link to="/register">¿Aún no tienes cuenta? Regístrate</Link>
          </p>
        </div>
      </form>

    </section>
     
    </>
  );
}

export default Login;
