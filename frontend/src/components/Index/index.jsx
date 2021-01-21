import {React, useEffect, useState} from 'react';

import './styles.css';

const Index = () => {
    const [bestsellers, setBestsellers] = useState([]);

    useEffect(async () => {
        const url = "http://localhost:3002/";
        const resposta = await fetch(url);

        setBestsellers(await resposta.json());
    }, []);



    return (
            <main id="pgInicial" className="container-fluid">
                <h2>Seja bem vindo(a)!</h2>
                <p>Aqui em nossa loja, <em className="text-danger">devs tem descontos %</em> nos produtos para sua casa!</p>
                <div id="bemVindo">
                    <p>Temos produtos de ótima qualidade e para todos os gostos,</p>
                    <p>para mais informações acesse a aba contato na parte superior </p>
                    <p>do menu e mande sua pergunta que responderemos assim que possível, <b>boas compras.</b></p>
                </div>
                <br/>
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
            </main>
    );
}

export default Index;