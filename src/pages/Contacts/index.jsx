
import NavBarHeader from "../../components/shared/NavBarHeader";
import Footer from "../../components/shared/Footer";
import "./_contacts.scss";
import { useState } from "react";
import Container from "../../components/shared/Container";

function Contacts() {

  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    commentary: ""
  });

  const [formSend, setFormSend] = useState(false);


  const handleInput = (event) => {
    const { id, value } = event.target;

    setFormData({
      ...formData,
      [id]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    const { name, surname, email, commentary} = formData;

    if (name && surname && email && commentary) {
      setFormSend(true);
    } 
  };

  return (
    <>
      <NavBarHeader title="Contacto" />

<Container>
<section className="container-contact">

<div className="contact-title">
  <h2>CONTÁCTANOS</h2>
  <div className="contact-line"></div>
</div>

<div className="contact-info">

  <div className="contact-logo">
    <img src="/images/logo-cervezas-negro.png" alt="Logo" />
  </div>

  {!formSend ? (
    <div className="contact-form">
      <form className="contact-form__info" onSubmit={handleSubmit}>
        <div className="form-info">
          <label htmlFor="name">Nombre</label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={handleInput}
            required
          />
        </div>
        <div className="form-info">
          <label htmlFor="surname">Apellidos</label>
          <input
            type="text"
            id="surname"
            value={formData.surname}
            onChange={handleInput}
            required
          />
        </div>
        <div className="form-info">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleInput}
            required
          />
        </div>
        <div className="form-info">
          <label htmlFor="commentary">Comentarios</label>
          <textarea
            className="form-commentary"
            id="commentary"
            value={formData.commentary}
            onChange={handleInput}
            required
          ></textarea>
        </div>
        <button className="form-btn" type="submit">
          Enviar
        </button>
      </form>
    </div>
  ) : (
    <div className="request-ok">
      <p>La solicitud ha sido enviada correctamente.</p>
      <img src="/images/requestOk.png" alt="Success" />
    </div>
  )}

</div>
</section>
</Container>

      <Footer />
    </>
  );
}

export default Contacts;
