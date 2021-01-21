import React from 'react';

import './styles.css';
import formas_pagamentos from '../imagens/formas_pagamentos.png';

const Footer = () => {
    return (
        <footer>
                <figure id="pagamento">
                    <figcaption>
                        <b>Formas de pagamento</b><br/>
                    </figcaption>
                        <img src={formas_pagamentos} alt="Formas de pagamento" title="Formas de pagamento"/>
                </figure>
                    <p>&copy; Desenvolvido por Renan Marques - Recode Pro 2020</p>
        </footer>
    );
}

export default Footer;