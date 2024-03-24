import NavBarHeader from "../../components/shared/NavBarHeader";
import Footer from "../../components/shared/Footer";
import "./_checkout.scss";
import Container from "../../components/shared/Container";
import { useContext, useState } from "react";
import { CartContext } from "../../components/context/cartContext";
import { EmptyCart } from "../Cart";
import { useNavigate } from "react-router-dom";
import { FaCheckCircle, FaTimes } from "react-icons/fa";


function Checkout() {

  const { isEmpty } = useContext(CartContext);
  const [successCheckout, setSuccessCheckout] = useState(false);

  return (
    <>
      {successCheckout && (
        <SuccesModal setSuccessCheckout={setSuccessCheckout} />
      )}
      <NavBarHeader title="Checkout" />
      <Container>
        {isEmpty() ? (
          <EmptyCart />
        ) : (
          <div className="checkout-content">
            <h1>Formulario de Compra</h1>
            <div className="checkout-form-content">
              <CheckOutForm />
              <CheckoutOrderNote />
            </div>
            <CheckOutOrderDetails />
            <ChekoutOrderPayment setSuccessCheckout={setSuccessCheckout} />
          </div>
        )}
      </Container>
      <Footer />
    </>
  );
}

export default Checkout;


export const CheckOutForm = ({setSuccessCheckout}) => {

  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    company: "",
    country: "",
    adress: "",
    province: "",
    city: "",
    postcode: "",
    telephone: "",
    email: "",
  })

  const [errorInfoForm, setErrorInfoForm] = useState("");

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData, 
      [id]: value
    })
  }
  
  const infoForm = async(event) => {
    event.preventDefault();
  
    const requiredFields = ["name", "surname", "email", "telephone", "adress", "postcode", "province",  "city", "country"];
    const missingFields = requiredFields.filter(field => !formData[field]);
    if(missingFields.length > 0) {
      setErrorInfoForm(`Faltan los siguientes datos: ${missingFields.join(", ")}`);
      return;
    } else {
      setSuccessCheckout();
    }
  }
  return (
    <form className="checkout-form" onSubmit={infoForm}>
      <fieldset>
        <label>Nombre</label>
        <input type="text" id="name" onChange={handleInputChange}/>
      </fieldset>
      <fieldset>
        <label>Apellidos</label>
        <input type="text" id="surname" onChange={handleInputChange}/>
      </fieldset>
      <fieldset>
        <label>Nombre de Empresa (Opcional)</label>
        <input type="text"id="company" onChange={handleInputChange} />
      </fieldset>
      <fieldset>
        <label>País</label>
        <input type="text" id="country" onChange={handleInputChange}/>
      </fieldset>
      <fieldset>
        <label>Dirección</label>
        <input type="text" id="adress" onChange={handleInputChange}/>
      </fieldset>
      <fieldset>
        <label>Provincia</label>
        <input type="text" id="province" onChange={handleInputChange}/>
      </fieldset>
      <fieldset>
        <label>Ciudad</label>
        <input type="text" id="city" onChange={handleInputChange}/>
      </fieldset>

      <fieldset>
        <label>Postcode / ZIP</label>
        <input type="text" id="postcode" onChange={handleInputChange}/>
      </fieldset>
      <fieldset>
        <label>Teléfono</label>
        <input type="text" id="telephone" onChange={handleInputChange}/>
      </fieldset>
      <fieldset>
        <label>Email</label>
        <input type="text" id="email" onChange={handleInputChange}/>
      </fieldset>

      {errorInfoForm && <p className="error-message">{errorInfoForm}</p>}

    </form>
  );
};

export const CheckOutOrderDetails = () => {
  const { cart, subtotal, taxes, total } = useContext(CartContext);
  return (
    <div className="checkout-order-details">
      <h1>Detalles de tu orden</h1>
      <div>
        <div className="checkout-order-details-0">
          <span>Productos</span>
          <span>Total</span>
        </div>
        <div className="checkout-order-details-1">
          {cart.map((item) => {
            return (
              <div key={item._id}>
                <span>
                  {item.nombre} x {item.quantity}
                </span>
                {/* no salen 2 decimales */}
                <span> {(item.precio.toFixed(2)) * item.quantity} €</span> 
              </div>
            );
          })}
        </div>
        <div className="checkout-order-details-2">
          <div>
            <div>
              <span>Subtotal</span>
            </div>
            <div>
              <span> {subtotal.toFixed(2)} €</span>
            </div>
          </div>
          <div>
            <div>
              <span>Impuestos</span>
            </div>
            <div>
              <span> {taxes.toFixed(2)} €</span>
            </div>
          </div>
          <div>
            <div>
              <span>Total</span>
            </div>
            <div>
              <span>
                <strong> {total.toFixed(2)} €</strong>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const CheckoutOrderNote = () => {
  return (
    <div className="checkout-order-note">
      <span>Comentarios (Opcional)</span>
      <textarea name="" id="" cols="30" rows="10"></textarea>
    </div>
  );
};



export const ChekoutOrderPayment = ({ setSuccessCheckout, infoForm}) => {
  return (
    <div className="checkout-order-payment">
      <div className="check-payment-type">
        <div>
          <label>
            <input name="payment_type" type="radio" />
            <span>Transferencia (€1.00)</span>
          </label>
          <img src="/images/lacaixa.png" alt="py-metho-lacaixa" />
        </div>
        <div>
          <label>
            <input name="payment_type" type="radio" />
            <span>Tarjeta de crédito (€1.00)</span>
          </label>
          <img src="/images/tarjeta.png" alt="py-tarjeta" />
        </div>
        <div>
          <label>
            <input name="payment_type" type="radio" />
            <span>Bizum (€1.00)</span>
          </label>
          <img src="/images/bizum.png" alt="pay-bizum" />
        </div>
        <div>
          <label>
            <input name="payment_type" type="radio" />
            <span>Paypal (€2.00)</span>
          </label>
          <img src="/images/paypal.png" alt="py-paypal" />
        </div>

      </div>
      <div className="check-o-btn">
        <button onClick={infoForm}>
          Realizar Compra
        </button>
      </div>
    </div>
  );
};

export const SuccesModal = ({ setSuccessCheckout }) => {

  const { clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  const handleClearCart = () => {
    clearCart();
    setSuccessCheckout(false);
    navigate("/");
  };
  return (
    <div className="checkout-succes-modal">
      <div className="checkout-modal-content">
        <div className="checkout-modal-icon">
          <FaCheckCircle />
        </div>
        <span className="checkout-modal-title">
          !Tu compra ha sido <br /> realizada con exito!
        </span>
        <span>
          Recibirás un correo electrónico, con <br /> las instrucciones de
          envío.
        </span>
        <button onClick={handleClearCart}>Entendido</button>
        <div onClick={handleClearCart} className="close-checkout-modal">
          <FaTimes />
        </div>
      </div>
    </div>
  );
};
