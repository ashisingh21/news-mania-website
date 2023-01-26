import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
function MainNavbar() {
  return <>
    <Navbar fixed="top" bg="dark" variant="dark">
      <Container className='nav-links'>
        <Navbar.Brand className='a-brand' to="/">News Mania</Navbar.Brand>
        <Nav className="me-auto">
          <Link className='a' to="/">Home</Link>
          <Link className='a' to="/business">Business</Link>
          <Link className='a' to="/entertainment">Entertainment</Link>
          <Link className='a' to="/general">General</Link>
          <Link className='a' to="/health">Health</Link>
          <Link className='a' to="/science">Science</Link>
          <Link className='a' to="/sports">Sports</Link>
          <Link className='a' to="/technology">Technology</Link>
        </Nav>
      </Container>
    </Navbar>
  </>
}
export default MainNavbar;