import { FaHome, FaCubes } from "react-icons/fa";
import './Sidebar.css'
import logo from "../../assets/img/logo.png"
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

interface SidebarProps {
  isSidebarOpen: boolean;
  setIsSidebarOpen: (open: boolean) => void;
}

const Sidebar = ({isSidebarOpen, setIsSidebarOpen}: SidebarProps) => {
 

  return (
    <aside className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
      <div className="inner">
          <header>
            <button 
            type="button"
            className='sidebar-burger'
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
              <span className='icon'
             > {isSidebarOpen ? <GrClose />
              : <GiHamburgerMenu />}</span>
            </button>
            <img src={logo} alt="logo"/>
          </header>
          <nav>
            <Nav.Link as={Link} to="/">
                <span className='icon'> <FaHome /></span>
                <p>Home</p>
                </Nav.Link>
                <Nav.Link as={Link} to="/orders">
                <span className='icon'> <FaCubes /></span>
                <p>Orders</p>
                </Nav.Link>
          </nav>
      </div>
    </aside>
  )
}

export default Sidebar
