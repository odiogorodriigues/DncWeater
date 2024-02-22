import Table from 'react-bootstrap/Table';
import "./index.scss";
import { useEffect, useState } from 'react';

const ArticleCep = (props) => {
    const [logradouro, setLogradouro] = useState("");
    const [bairro, setBairro] = useState("");
    const [localidade, setLocalidade] = useState("");

    useEffect(() => {
        setLogradouro(props.props.logradouro);
        setBairro(props.props.bairro);
        setLocalidade(props.props.localidade);
    }, [props]);

    return (
        <div className='ArticleCep' id='endereco'>
            <h1>
                Resultado da busca por CEP
                <img src="/cep.svg" width={'100px'} alt="cep" />
            </h1>
            <div className='mt-5'>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th style={{borderTopLeftRadius:'10px'}}>Logradouro/nome</th>
                            <th>Bairro/Distrito</th>
                            <th style={{borderTopRightRadius:'10px'}}>Localidade/UF</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{logradouro}</td>
                            <td>{bairro}</td>
                            <td>{localidade}</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default ArticleCep;
