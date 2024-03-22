import { useState } from "react";
import { API } from "./axios/api.js";
import "../styles/_register.scss";
import Header from "./shared/Header.jsx";


function Register() {

    const [formData, setFormData] = useState({
        name: "",
        surname: "",
        email: "",
        password: "",
        telephone: "",
        adress: "",
        postcode: "",
        province: "",
        city: "",
        country: ""

      })

    const handleInput = (event) => {
        const {id, value} = event.target;
 
        setFormData({
            //se ponen los ... para que se almacenen y no recargue sin guardar. Formadata es email y password, y una vez que se escriban nuevos los anteriores se guarden
            ...formData,
            // el valor se guarda en el [id], por eso se pone en corchetes, correspondiente de (email/password). el id tomar el valor del value
            [id]:value
        })
    }

    const compareUsers = async(event) => {
        event.preventDefault();
        try {
          const result = await API.post('users/register', formData);
          console.log(result);
        //   navigate('/login');
        } catch (error){
          console.error(error);
        }
   
    }

  return (
    <>
    <Header/>
    <section className="bg-register">
        <h2>Registro</h2>
    </section>
    <form onSubmit={compareUsers} className="register-form">
        <div className="form-info">
            <label>Nombre</label>
            <input onChange={handleInput} type="text" id="name"/>
        </div>
        <div className="form-info">
            <label>Apellidos</label>
            <input onChange={handleInput} type="text" id="surname"/>
        </div>
        <div className="form-info">
            <label>Email</label>
            <input onChange={handleInput} type="email" id="email"/>
        </div>
        <div className="form-info">
            <label>Contraseña</label>
            <input onChange={handleInput} type="password" id="password"/>
        </div>
        <div className="form-info">
            <label>Telefono</label>
            <input onChange={handleInput} type="tel" id="telephone"/>
        </div>
        <div className="form-info">
            <label>Direccion</label>
            <input onChange={handleInput} type="text" id="adress"/>
        </div>
        <div className="form-info">
            <label>Codigo postal</label>
            <input onChange={handleInput} type="number" id="postcode"/>
        </div>
        <div className="form-info">
            <label>Provincia</label>
            <input onChange={handleInput} type="text" id="province"/>
        </div>
        <div className="form-info">
            <label>Ciudad</label>
            <input onChange={handleInput} type="text" id="city"/>
        </div>
        <div className="form-info">
            <label>Pais</label>
            <input onChange={handleInput} type="text" id="country"/>
        </div>
        <button type="submit" className="register-button">Registrarse</button>
    </form>
    </>
  )
}

export default Register;
