import ArticleCep from '../../components/ArticleCep/ArticleCep';
import ArticleTempo from '../../components/ArticleTempo/ArticleTempo';
import Footer from '../../components/Footer/Footer';
import Formulario from '../../components/Formulario/Formulario';
import Header from '../../components/Header/Header';
import Navegacao from '../../components/Navegacao/navegacao';
import './index.scss'

const Home = () => {
    return <div>
        <Navegacao />
        <Header />
        <Formulario />
        <ArticleCep />
        <ArticleTempo />
        <Footer />
    </div>;
};

export default Home