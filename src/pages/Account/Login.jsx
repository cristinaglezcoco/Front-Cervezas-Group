import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { API } from "./../../components/axios/api";
import '../../pages/Account/_login.scss'
import { UserContext } from "../../components/context/userContext";

function Login() {

  const userLoginContext = useContext(UserContext);

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/");
    }
  }, [navigate]);

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
   
      userLoginContext.addUser(result.data)

      navigate("/"); //CAMBIAR A MYAREA O EL LINK QUE SEA
    } catch (error) {
      console.error(error);

      if (error.response) {
        console.log(error.response); // Agrega este console.log para ver la respuesta del servidor
        if (error.response.data.message === 'invalid password') {
          setErrorMessage("Contraseña incorrecta, intentelo de nuevo.")
        } else if (error.response.data.message === 'user not found') {
          setErrorMessage("Email incorrecto, intentelo de nuevo.")
        } else {
          setErrorMessage("Las credenciales son incorrectas, intentelo de nuevo")
        }
      }
    }
  }

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

        {errorMessage && <div className="login-error">{errorMessage}</div>}

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
