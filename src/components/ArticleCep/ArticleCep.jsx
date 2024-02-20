import Table from 'react-bootstrap/Table';
import "./index.scss";

const ArticleCep = () => {
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
                            <td>Justino Cobra</td>
                            <td>Vila Ema</td>
                            <td>SP</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default ArticleCep;
