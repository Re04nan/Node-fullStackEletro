import React, {lazy, Suspense} from 'react';

import './styles.css';

const Index = () => {
    const Bestsellers = lazy(()=> import('../Bestsellers'));
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
                <Suspense fallback={
                    <div style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                        <img alt="Loading..." src="http://www.cabovillas.com/images/icons/loading-results.gif"/>
                    </div>
                    }>
                    <Bestsellers/>
                </Suspense>
            </main>
    );
}

export default Index;