import "./index.scss";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Formulario = () => {
    return (
        <Form className="formulario">
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label className="labelprimary">Primeiro Nome:</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Insira seu primeiro nome"
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="labelprimary">E-mail:</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCep">
                <Form.Label className="labelprimary">Digite o CEP:</Form.Label>
                <Form.Control type="number" placeholder="Insira o CEP" className="color" />
            </Form.Group>

            <div className="FormLogLat">
                <Form.Group className="mb-3" controlId="formBasicLogLat">
                    <Form.Label>
                        Digite a latitude e longitude para saber a previsão:
                    </Form.Label>
                    <div className="LogLat">
                        <Form.Control type="number" placeholder="Latitude" />
                        <Form.Control type="number" placeholder="Longitude" />
                    </div>
                </Form.Group>
            </div>

            <Button className="mt-5" variant="primary" type="submit">
                Acessar
            </Button>
        </Form>
    );
};

export default Formulario;
