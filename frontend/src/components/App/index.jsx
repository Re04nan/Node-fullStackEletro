import React from 'react';
import { BrowserRouter } from "react-router-dom";
import Footer from '../Footer';
import Routes from '../routes/routes';

const App = () => {

    return (
        <>
            <BrowserRouter>
                <Routes/>
            </BrowserRouter>
            <Footer/>
        </>
    );  
}

export default App;