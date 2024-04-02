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
            <CheckOutForm setSuccessCheckout={setSuccessCheckout} />
          </div>
        )}
      </Container>
      <Footer />
    </>
  );
}

export default Checkout;

export const CheckOutForm = ({ setSuccessCheckout }) => {

  const [formData, setFormData] = useState({
    Nombre: "",
    Apellidos: "",
    Empresa: "",
    País: "",
    Dirección: "",
    Provincia: "",
    Ciudad: "",
    CódigoPostal: "",
    Teléfono: "",
    Email: "",
  });

  const [errorInfoForm, setErrorInfoForm] = useState("");

  const handleInputChange = (e) => {
    const { id, value } = e.currentTarget;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const infoForm = async (e) => {
    e.preventDefault();

    const requiredFields = [
      "Nombre",
      "Apellidos",
      "Email",
      "Teléfono",
      "Dirección",
      "CódigoPostal",
      "Provincia",
      "Ciudad",
      "País",
    ];

    const missingFields = requiredFields.filter((field) => !formData[field]);
    if (missingFields.length > 0) {
      setErrorInfoForm(`Faltan los siguientes datos: ${missingFields.join(", ")}`)
    } else {
      setErrorInfoForm("");
      setSuccessCheckout(true);
    }
  };

  return (
    <form  onSubmit={infoForm}>
      <div className="checkout-form-content">
        <div className="checkout-form">
          <fieldset>
            <label>Nombre</label>
            <input
              required
              type="text"
              id="Nombre"
              onChange={handleInputChange}
            />
          </fieldset>
          <fieldset>
            <label>Apellidos</label>
            <input
              required
              type="text"
              id="Apellidos"
              onChange={handleInputChange}
            />
          </fieldset>
          <fieldset>
            <label>Nombre de Empresa (Opcional)</label>
            <input type="text" id="Empresa" onChange={handleInputChange} />
          </fieldset>
          <fieldset>
            <label>País</label>
            <input
              required
              type="text"
              id="País"
              onChange={handleInputChange}
            />
          </fieldset>
          <fieldset>
            <label>Dirección</label>
            <input
              required
              type="text"
              id="Dirección"
              onChange={handleInputChange}
            />
          </fieldset>
          <fieldset>
            <label>Provincia</label>
            <input
              required
              type="text"
              id="Provincia"
              onChange={handleInputChange}
            />
          </fieldset>
          <fieldset>
            <label>Ciudad</label>
            <input
              required
              type="text"
              id="Ciudad"
              onChange={handleInputChange}
            />
          </fieldset>
          <fieldset>
            <label>Postcode / ZIP</label>
            <input
              required
              type="text"
              id="CódigoPostal"
              onChange={handleInputChange}
            />
          </fieldset>
          <fieldset>
            <label>Teléfono</label>
            <input
              required
              type="text"
              id="Teléfono"
              onChange={handleInputChange}
            />
          </fieldset>
          <fieldset>
            <label>Email</label>
            <input
              required
              type="text"
              id="Email"
              onChange={handleInputChange}
            />
          </fieldset>

          {errorInfoForm && <p className="error-form">{errorInfoForm}</p>}

        </div>
        <CheckoutOrderNote />
      </div>
      <CheckOutOrderDetails />
      <ChekoutOrderPayment infoForm={infoForm} setSuccessCheckout={setSuccessCheckout} formData={formData} setErrorInfoForm={setErrorInfoForm} />

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
                <span> {item.precio.toFixed(2) * item.quantity} €</span>
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
                <strong> {total} €</strong>
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

export const ChekoutOrderPayment = ({ infoForm, setErrorInfoForm, formData }) => {

  const [selectedPayment, setSelectedPayment] = useState("");
  const [errorPayment, setErrorPayment] = useState("");

  const handleDivPayment = (paymentType) => {
    setSelectedPayment(paymentType);
  };

  const handlePayment = (e) => {
    e.preventDefault();
  
    const requiredFields = [
      "Nombre",
      "Apellidos",
      "Email",
      "Teléfono",
      "Dirección",
      "CódigoPostal",
      "Provincia",
      "Ciudad",
      "País",
    ];
  
    const missingFields = requiredFields.filter((field) => !formData[field]);
  
    if (missingFields.length > 0 || !selectedPayment) {
      if (missingFields.length > 0) {
        setErrorInfoForm(`Faltan los siguientes datos: ${missingFields.join(", ")}`);
      } else {
        setErrorInfoForm("");
      }
      if (!selectedPayment) {
        setErrorPayment("Selecciona un método de pago");
      } else {
        setErrorPayment("");
      }
    } else {
      setErrorInfoForm("");
      setErrorPayment("");
      infoForm(e); 
    }
  };
  

  return (
    <div className="checkout-order-payment">
      <div className="check-payment-type">
        <div onClick={() => handleDivPayment("Transferencia")}>
          <label>
            <input name="payment_type" type="radio" defaultChecked={selectedPayment === 'Transferencia'}/>
            <span>Transferencia (€1.00)</span>
          </label>
          <img src="/images/lacaixa.png" alt="py-metho-lacaixa" />
        </div>
        <div onClick={() => handleDivPayment("Tarjeta")}>
          <label>
            <input name="payment_type" type="radio" defaultChecked={selectedPayment === 'Tarjeta'} />
            <span>Tarjeta de crédito (€1.00)</span>
          </label>
          <img src="/images/tarjeta.png" alt="py-tarjeta" />
        </div>
        <div onClick={() => handleDivPayment("Bizum")}>
          <label>
            <input name="payment_type" type="radio"  defaultChecked={selectedPayment === 'Bizum'}/>
            <span>Bizum (€1.00)</span>
          </label>
          <img src="/images/bizum.png" alt="pay-bizum" />
        </div>
        <div onClick={() => handleDivPayment("Paypal")}>
          <label>
            <input name="payment_type" type="radio" defaultChecked={selectedPayment === 'Paypal'}/>
            <span>Paypal (€2.00)</span>
          </label>
          <img src="/images/paypal.png" alt="py-paypal" />
        </div>
      </div>

      {errorPayment && <p className="error-payment">{errorPayment}</p>}

      <div className="check-o-btn">
        <button type="button" onClick={handlePayment}>
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
}
