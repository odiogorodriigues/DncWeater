import { useState } from "react";
import "./index.scss";
import { useEffect } from "react";

const ArticleTempo = props => {
    const [tempo, setTempo] = useState(0);
    
    useEffect(() => {
        setTempo(props.props)
    }, [props])

    function formataTempo(tempo) {
        if (tempo == undefined) {
            return 0
        } else {
            return tempo
        }

    }


    return (
        <div className='ArticleTempo' id='previsao'>
            <h1>
                Previsão do tempo na região:
                <img src='/tempo.svg' width={"150px"} alt='tempo' />
            </h1>
            <h2 className='mt-5'>
                {`Previsão de tempo de acordo com a região: ${formataTempo(tempo)}° C`}
            </h2>
        </div>
    );
};

export default ArticleTempo;
