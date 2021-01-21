import {React, useEffect, useState} from 'react';
import {Link} from 'react-router-dom'; 

import Category from '../Category';

import './styles.css';
import {copiar, exibirZoom} from './funcoes';


const Products = () => {
    const [produtos, setProdutos] = useState([]);
    const [filtro, setFiltro] = useState("todos");

    function filtroCategorias(categoria){
        setFiltro(categoria)
    }

    useEffect(async () => {
        const url = "http://localhost:3002/Produtos";
        const resposta = await fetch(url);

        setProdutos(await resposta.json());
    }, []);

    return (
        <main className="container-fluid">
        <header className="text-primary">
            <h2>Produtos</h2>
            <hr/>
        </header>
        <Category onClick={filtroCategorias}/>
        <section>
            <div id="container">
                {produtos.map((item) => {
                    if(filtro === "todos"){
                        return (
                            <div key={item.id_produto} className={`secProdutos text-dark ${item.categoria}`}>
                                <figure>
                                    <img onClick={exibirZoom} className="imgProduto" 
                                        data-toggle="modal" data-target=".bd-example-modal-sm" id={item.id_produto}
                                        src={require(`.././imagens/Produtos${item.nome_imagem}`).default} alt={item.nome}
                                        title={item.nome}/>
                                </figure>
                                <figcaption>
                                    <br/>
                                    {item.nome} {item.descricao}
                                    <hr/>
                                    <s>R${item.preco},00</s><br/>
                                    <b className="precoDestaque">R${item.preco_venda},00</b>
                                </figcaption>
                                <button className="btnComprar" onClick={copiar}><Link to={() => "/Pedidos/" + item.id_produto}>Comprar</Link></button>
                                </div> 
                            )
                    } 
                    if(item.categoria === filtro) {
                    return (
      
                    <div key={item.id_produto} className={`secProdutos text-dark ${item.categoria}`}>
                        <figure>
                            <img onClick={exibirZoom} className="imgProduto" 
                                data-toggle="modal" data-target=".bd-example-modal-sm" id={item.id_produto}
                                src={require(`.././imagens/Produtos${item.nome_imagem}`).default} alt={item.nome}
                                title={item.nome}/>
                        </figure>
                        <figcaption>
                            <br/>
                            {item.nome} {item.descricao}
                            <hr/>
                            <s>R${item.preco},00</s><br/>
                            <b className="precoDestaque">R${item.preco_venda},00</b>
                        </figcaption>
                        <button className="btnComprar" onClick={copiar}><Link to={() => "/Pedidos/" + item.id_produto}>Comprar</Link></button>
                    </div> 
                )}}
                )}
            </div>
            <br/>
        </section>
    </main>
    );
}
export default Products;
