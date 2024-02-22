import "./index.scss";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import api from "../../APIs/ViaCep";
import apiTempo from "../../APIs/OpenWeather";


const Formulario = props => {
    const [cep, setCep] = useState("");
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    async function Tempo() {
        try {
            const response = await apiTempo.get(
                `weather?q=passos&units=metric&appid=f37acaf9a35e97c9a70af0954602ae95&lang=pt_br`
            );
            props.handleLocal(parseInt(response.data.main.temp));
        }   catch (error) {
            console.log(error);
        }
    }

    async function localizarCep() {
        if (nome === "" || email === "" || cep === "") {
            alert("Preencha todos os campos");
            return;
        }

        try {
            const response = await api.get(`/${cep}/json`);
            props.handleResult(response.data)
            setNome("")
            setCep("")
            setEmail("")
            Tempo();
        } catch (error) {
            console.log("ERRO" + error);
        }
    } 

    return (
        <Form onSubmit={handleSubmit} className='formulario'>
            <Form.Group className='mb-3' controlId='formBasicName'>
                <Form.Label className='labelprimary'>Primeiro Nome:</Form.Label>
                <Form.Control
                    value={nome}
                    type='text'
                    placeholder='Insira seu primeiro nome'
                    onChange={(event) => setNome(event.target.value)}
                />
            </Form.Group>

            <Form.Group className='mb-3' controlId='formBasicEmail'>
                <Form.Label className='labelprimary'>E-mail:</Form.Label>
                <Form.Control
                    value={email}
                    type='email'
                    placeholder='Enter email'
                    onChange={(event) => setEmail(event.target.value)}
                />
            </Form.Group>

            <Form.Group className='mb-3' controlId='formBasicCep'>
                <Form.Label className='labelprimary'>Digite o CEP:</Form.Label>
                <Form.Control
                    value={cep}
                    onChange={(event) => setCep(event.target.value)}
                    type='number'
                    placeholder='Insira o CEP'
                    className='color'
                />
            </Form.Group>

            <Button className='mt-5' variant='primary' type='submit' onClick={localizarCep}>
                Acessar
            </Button>
        </Form>
    );
};

export default Formulario;
