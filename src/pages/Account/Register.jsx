import { useState } from "react";
import { API } from "../../components/axios/api.js";
import "../Account/_register.scss";
import { useNavigate } from "react-router-dom";
import NavBarHeader from "../../components/shared/NavBarHeader.jsx";
import Footer from "../../components/shared/Footer.jsx";



function Register() {

    const navigate = useNavigate();

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

    const [errorMessage, setErrorMessage] = useState("");

    const handleInput = (event) => {
        const {id, value} = event.target;
 
        setFormData({
            //se ponen los ... para que se almacenen y no recargue sin guardar. Formadata es email y password, y una vez que se escriban nuevos los anteriores se guarden
            ...formData,
            // el valor se guarda en el [id], por eso se pone en corchetes, correspondiente de (email/password). el id tomar el valor del value
            [id]:value
        })
    }

    //pasa los campos a español para los mensajes de error
    const campoTraducido = {
        name: "Nombre",
        surname: "Apellidos",
        email: "Email",
        password: "Contraseña",
        telephone: "Teléfono",
        adress: "Dirección",
        postcode: "Código postal",
        province: "Provincia",
        city: "Ciudad",
        country: "País"
    };

    const validateEmailFormat = (email) => {
        const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        
        const validDomains = ["gmail.com", "gmail.es", "gmail.net", "hotmail.com", "hotmail.es", "hotmail.net", "yahoo.com", "yahoo.es", "yahoo.net", "outlook.com", "outlook.es", "outlook.net", "aol.com", "aol.es", "aol.net", "gmx.com", "gmx.es", "gmx.net"];
        // Dominios permitidos
    
        if (!regex.test(email)) {
            return false; //para el formato
        }
    
        const domain = email.split('@')[1];
        if (!validDomains.includes(domain)) {
            return false; // para el dominio
        }
    
        return true; // Correo válido con formato y dominio correctos
    };
    

    const compareUsers = async(event) => {
        event.preventDefault();

        // Verificar si faltan datos
        const requiredFields = ["name", "surname", "email",    "password", "telephone", "adress", "postcode", "province",  "city", "country"];
        const missingFields = requiredFields.filter(field => !formData[field]);
        const translatedFields = missingFields.map(field => campoTraducido[field]);
        if (translatedFields.length > 0) {
          setErrorMessage(`Faltan los siguientes datos: ${translatedFields.join(", ")}`);
          return; 
        }

        //verificar email desde el front
        if (!validateEmailFormat(formData.email)) {
            setErrorMessage("El correo electrónico no es válido");
            return;
        }

        try {
          const result = await API.post('users/register', formData);
          console.log(result);
          navigate('/login');
        } catch (error){
          console.error(error);
        }
   
    }

  return (
    <>

    <NavBarHeader title={"Registro"}/>

    <section className="container-register">

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
          <button type="submit" className="register-btn">Registrarse</button>

          {errorMessage && <div className="error-message">{errorMessage}</div>}
      </form>

      {/* <div className="register-ok">
        <p>El registro se ha relizado correctamente</p>
      </div> */}

    </section>

    <Footer/>

    </>
  )
}

export default Register;

