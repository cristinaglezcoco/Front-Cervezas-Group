import Logo from '../../images/logo-cervezas-negro.png'
import "../../styles/_header.scss"

function Header() {
  return (


    <header className="container-header">
        <div className="logo-header">
            <img src={Logo}  />
        </div>

        <div className="list-header">
            <ul>
                <li>Inicio</li>
                <li>Quiénes somos</li>
                <li>Productos</li>
                <li>Galería</li>
                <li>Contacto</li>
            </ul>
        </div>
    </header>

  )
}

export default Header