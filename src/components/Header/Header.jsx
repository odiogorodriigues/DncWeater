import './index.scss';


const Header = () => {
    return (
        <div className='header'>
            <h1 className='texto'>Descubra Mais com Precisão: <br />
                Previsões do Tempo e endereços <br />
                em tempo real.</h1> 
            <img src="/image.svg" width={'250px'} alt="clima" />
        </div>
        )
}

export default Header