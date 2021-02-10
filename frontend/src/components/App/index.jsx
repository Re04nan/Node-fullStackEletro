import React, { lazy, Suspense } from 'react';
import { BrowserRouter } from "react-router-dom";
const Footer = lazy(()=> import('../Footer'));
const Routes = lazy(()=> import('../routes/routes'));

const App = () => {

    return (
        <>
            <BrowserRouter>
            <Suspense fallback={
            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}>
                <img alt="Loading..." src="http://www.cabovillas.com/images/icons/loading-results.gif"/>
            </div>
            }>
                <Routes/>
            </Suspense>
            </BrowserRouter>
            <Suspense fallback={
                <h2 style={{
                    textAlign: "center",
                    color: "#0099cc"
                }}>Página carregando... <br/> Aguarde um instante!</h2>
                }>
                <Footer/>
            </Suspense>
        </>
    );  
}

export default App;