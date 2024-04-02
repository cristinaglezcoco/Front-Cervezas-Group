import { useEffect, useState } from "react";
import { API } from "../../components/axios/api.js";
import "../Account/_profile.scss";
import "../Checkout/_checkout.scss";
import NavBarHeader from "../../components/shared/NavBarHeader.jsx";
import Footer from "../../components/shared/Footer.jsx";
import Container from "../../components/shared/Container.jsx";
import { FaCheckCircle, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Profile() {

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
        country: "",
    });
      
    const [originalData, setOriginalData] = useState(null);
    const [showMessage, setShowMessage] = useState(false);
    const [visiblePassword, setVisiblePassword] = useState(false);

    const handleVisibilityPassword = () => {
        setVisiblePassword(!visiblePassword);
    }

    const passwordImage = visiblePassword ? "/images/password-abierta.png" : "/images/password.png";
    const navigate = useNavigate();
    
    const handleInput = (event) => {
        const { id, value } = event.target;
        setFormData({
          ...formData,
          [id]: value,
        });
    };

  const fetchUserData = async () => {
    try {
        const userId = localStorage.getItem('user_id');
        const userIdParsed = JSON.parse(userId);
        
        const result = await API.get(`users/${userIdParsed}`);
        const userData = result.data.data;
        setFormData(userData);
        setOriginalData(userData);
    } catch (error) {
        console.error("Error fetching user data:", error);
    }   
  };
    
    
    useEffect(() => {
        fetchUserData();
      }, []);
    
    const updateUsers = async (event) => {
        event.preventDefault();
        try {
            const userId = localStorage.getItem('user_id');
            const userIdParsed = JSON.parse(userId);
    
          // Comparar formData con originalData para detectar cambios
          const updatedData = {};
          for (const key in formData) {
            if (formData[key] !== originalData[key]) {
              updatedData[key] = formData[key];
            }
          }
    
          if (Object.keys(updatedData).length === 0) {
            console.log("No hay cambios para actualizar.");
            return;
          }
    
          const result = await API.put(`users/modify/${userIdParsed}`, updatedData);
          setShowMessage(true);

        } catch (error) {
          console.error("Error updating user data:", error);
        }
    };

    const handleClear = () => {
        navigate("/");
    };
    

    return (
        <>
        
        <NavBarHeader title="Perfil"/>
        <Container>
        <section className="container-register">
            <form className="register-form" onSubmit={updateUsers}>
            <h2>Actualiza tus datos</h2>
                <div className="form-info">
                    <label>Nombre</label>
                    <input onChange={handleInput} type="text" id="name" value={formData.name}/>
                </div>
                <div className="form-info">
                    <label>Apellidos</label>
                    <input onChange={handleInput} type="text" id="surname" value={formData.surname}/>
                </div>
                <div className="form-info">
                    <label>Email</label>
                    <input onChange={handleInput} type="email" id="email" value={formData.email}/>
                </div>
                <div className="form-info">
                    <label>Contraseña</label>
                    <input onChange={handleInput} value={formData.password} type={visiblePassword ? "text" : "password"}id="password" />
                    <img src={passwordImage} onClick={handleVisibilityPassword} />
                </div>
                <div className="form-info">
                    <label>Telefono</label>
                    <input onChange={handleInput} type="tel" id="telephone" value={formData.telephone}/>
                </div>
                <div className="form-info">
                    <label>Direccion</label>
                    <input onChange={handleInput} type="text" id="adress" value={formData.adress}/>
                </div>
                <div className="form-info">
                    <label>Codigo postal</label>
                    <input onChange={handleInput} type="number" id="postcode" value={formData.postcode}/>
                </div>
                <div className="form-info">
                    <label>Provincia</label>
                    <input onChange={handleInput} type="text" id="province" value={formData.province}/>
                </div>
                <div className="form-info">
                    <label>Ciudad</label>
                    <input onChange={handleInput} type="text" id="city" value={formData.city}/>
                </div>
                <div className="form-info">
                    <label>Pais</label>
                    <input onChange={handleInput} type="text" id="country" value={formData.country}/>
                </div>
                <button type="submit" className="register-btn">Actualizar datos</button>
            </form>
        </section>

        {showMessage && (
          <div className="checkout-succes-modal">
            <div className="checkout-modal-content">
              <div className="checkout-modal-icon">
                <FaCheckCircle />
              </div>
              <span className="checkout-modal-title">
                ¡Tus datos se actualizaron con éxito!
              </span>
              <button onClick={handleClear}>Entendido</button>
              <div onClick={handleClear} className="close-checkout-modal">
                <FaTimes />
              </div>
            </div>
          </div>
        )}
        </Container>
        <Footer/>
        
        </>
        
        
    )
}

export default Profile
