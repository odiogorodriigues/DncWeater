import "./index.scss";

const ArticleTempo = () => {
    return (
        <div className="ArticleTempo" id="previsao">
            <h1>Previsão do tempo na região: 
                <img src="/tempo.svg" width={'150px'} alt="tempo" />
            </h1>
            <h2 className="mt-5">Previsão de tempo de acordo com a região: 24° C</h2>
        </div>
    );
};

export default ArticleTempo;
