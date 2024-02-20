import "./index.scss";
import Container from "react-bootstrap/Container";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Navegacao = () => {
    return (
        <Navbar className="bg-body-tertiary nav">
            <Container>
                <Navbar.Brand className="logo-nav" href="#">
                    DncWeather
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Nav>
                        <Nav.Link className="link-nav" href="#endereco">Endereços</Nav.Link>
                        <Nav.Link className="link-nav" href="#previsao">Previsão do tempo</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navegacao;
