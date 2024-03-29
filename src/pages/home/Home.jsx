import { useState } from 'react';
import ArticleCep from '../../components/ArticleCep/ArticleCep';
import ArticleTempo from '../../components/ArticleTempo/ArticleTempo';
import Footer from '../../components/Footer/Footer';
import Formulario from '../../components/Formulario/Formulario';
import Header from '../../components/Header/Header';
import Navegacao from '../../components/Navegacao/navegacao';
import './index.scss'

const Home = () => {
    const [response, setResponse] = useState('')
    const updateResult = r => {
        setResponse(r)
    }

    const [local, setLocal] = useState();
    const updateLocal = r => {
        setLocal(r)
    }


    return <div>
        <Navegacao />
        <Header />
        <Formulario handleLocal={updateLocal} handleResult={updateResult} />
        <ArticleCep props={response}/>
        <ArticleTempo props={local} />
        <Footer />
    </div>;
};

export default Home