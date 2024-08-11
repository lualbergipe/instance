import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import {useUser} from '../../hooks'
import "./TopBar.css"

const TopBar = () => {
  const {username, logout} = useUser()

  return (
    <Navbar bg="dark" data-bs-theme="dark" className="bg-body-tertiary navbar">
    <Container>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
          {
            username ? (
              <>
             <NavDropdown
              id="nav-dropdown-dark-example"
              title={`!hola: ${username}`}
              menuVariant="dark"
            >
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={() => logout()}>
               Cerrar sesión
              </NavDropdown.Item>
            </NavDropdown>
              </>
            ):(
              <span>Agrega tu nombre de usuario</span>
            )
          }
         
        </Navbar.Text>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default TopBar;
