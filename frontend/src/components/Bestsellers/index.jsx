import {React, useState, useEffect} from 'react';

import './styles.css';

const Bestsellers = () => {
    const [bestsellers, setBestsellers] = useState([]);

    useEffect(async () => {
        const url = "http://localhost:3002/";
        const resposta = await fetch(url);

        setBestsellers(await resposta.json());
    }, []);
    return(
    <>
        <h2>TOP 3 - Mais vendidos</h2>
        <article>
            {bestsellers.map(item => {
                return(
                    <div key={item.id_produto} className="sold">
                        <img className="" src={require(`.././imagens/Produtos${item.nome_imagem}`).default} alt={item.produtos}/>
                        <div className="">
                            <p className="text-white bg-danger font-weight-bold text-uppercase">{item.produtos} ({item.vendidos})</p>
                        </div>
                    </div>
                )
            })}
        </article>
    </>
    );
}

export default Bestsellers;