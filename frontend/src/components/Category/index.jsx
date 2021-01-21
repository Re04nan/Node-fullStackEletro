import React from 'react';

import './styles.css';
import {limpar, efeitoTela} from '../Products/funcoes.js';

const Category = (props) => {  
    function filtroCategoria(event){ 
        props.onClick(event.target.id)
    }
    return (
        <aside id="categorias">
                <h3>Categorias</h3>
                <ul className="list-group-flush">
                    <li className="lista list-group-item d-flex justify-content-between align-items-center" id="todos" onMouseOut={limpar} onMouseMove={efeitoTela}
                        onClick={filtroCategoria}>Todos os itens<span className="badge badge-primary badge-pill">12</span></li>
                    <li className="lista list-group-item d-flex justify-content-between align-items-center" id="fogao" onMouseOut={limpar} onMouseMove={efeitoTela}
                        onClick={filtroCategoria}>Fogões<span className="badge badge-primary badge-pill">2</span></li>
                    <li className="lista list-group-item d-flex justify-content-between align-items-center" id="microondas" onMouseOut={limpar} onMouseMove={efeitoTela}
                        onClick={filtroCategoria}>Microondas<span className="badge badge-primary badge-pill">3</span></li>
                    <li className="lista list-group-item d-flex justify-content-between align-items-center" id="lavadora" onMouseOut={limpar} onMouseMove={efeitoTela}
                        onClick={filtroCategoria}>Lavadoura de roupas<span className="badge badge-primary badge-pill">2</span></li>
                    <li className="lista list-group-item d-flex justify-content-between align-items-center" id="lavaLoucas" onMouseOut={limpar} onMouseMove={efeitoTela}
                        onClick={filtroCategoria}>Lava-louças<span className="badge badge-primary badge-pill">2</span></li>
                    <li className="lista list-group-item d-flex justify-content-between align-items-center" id="geladeira" onMouseOut={limpar} onMouseMove={efeitoTela}
                        onClick={filtroCategoria}>Geledeiras<span className="badge badge-primary badge-pill">3</span></li>
                </ul>
            </aside>
    );
}

export default Category;