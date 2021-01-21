import {React, useEffect, useState} from 'react';

import './styles.css';

const Order = ({match}) => {
    const id = +(match.params.id);
    const [produtos, setProdutos] = useState([]);
    const [msg, setMsg] = useState("");
    const [quantidade, setQuantidade] = useState(1);
    const [total, setTotal] = useState(0);
    const [form, setForm] = useState({
        nome: "",
        telefone: "",
        endereco: "",
        id: id
    });

    const controleMudanca = (event) => {
        setForm({
            ...form,
            [event.target.id]: event.target.value
        })
    }

    useEffect(() => {
        const url = "http://localhost:3002/Pedidos/" + id;
        fetch(url).then(res => res.json()).then(jsonRes => {
            setProdutos(jsonRes);
            setTotal(jsonRes[0].preco_venda);
        });
        
    }, []);
 
     async function registerOrder(event) {
        event.preventDefault();
        const url = "http://localhost:3002/Registrar";
        const {quantidade, total, nome, telefone, endereco, id} = event.target;

        let obj = {
            "quantidade" : quantidade.value,
            "total" : total.value,
            "nome" : nome.value,
            "telefone" : telefone.value,
            "endereco" : endereco.value,
            "id" : id.value
        }

        await fetch(url, {
            method: 'POST',
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(obj)
        }).then(res => res.json()).then(resJson =>{
            if(resJson.protocol41 === true){
            setMsg("Pedido realizado com sucesso!");

                setTimeout(() => {
                    setMsg("")
                }, 3000);
            } else {
                setMsg("Erro, tente novamente ou entre em contato!");
                setTimeout(() => {
                    setMsg("")
                }, 3000);
            }

        })
    }

    return (
        <main className="container-fluid">
        <aside>
            <form onSubmit={registerOrder}>
                <div id="container_pedidos">
                
                    <p>{msg}</p>
                    
                    <h1 className="text-primary">Realizar Compra</h1>
                    <label htmlFor="nome">Nome Completo:</label>
                    <input onChange={controleMudanca} type="text" name="nome" id="nome" placeholder="Digite seu nome Completo" required/>
                    <label htmlFor="endereco">Endereço:</label>
                    <input onChange={controleMudanca} type="text" name="endereco" id="endereco" placeholder="Digite seu endereço" required/>
                    <label htmlFor="telefone">Telefone:</label>
                    <input onChange={controleMudanca} type="tel" name="telefone" id="telefone" placeholder="(xx) xxxxx-xxxx" required/>
                    <label htmlFor="quantidade">Quantidade:</label>
                    <input onChange={controleMudanca} type="number" name="quantidade" value={quantidade} onChange={(event) => setQuantidade(event.target.value)} id="quantidade" min="1" max="10"/>
                    <input onChange={controleMudanca} type="hidden" name="id" value={id} />
                    <button className="btnComprar">Enviar</button>
                    <div id="valor">
                        <label htmlFor="total">Total R$:</label>
                        <input onChange={controleMudanca} type="number" id="total" name="total" value={total * quantidade} disabled/>
                    </div>
                </div>
            </form>
            {produtos.map(item => {
                if(id === item.id_produto){
                    return(
                        <div key={id} name={item.id_produto} className="painelClone">
                            <div className="secProdutos" id={item.id_produto}>
                            <figure>
                                <img className="imgProduto"
                                    id={item.id_produto}
                                    src={require(`.././imagens/Produtos${item.nome_imagem}`).default}
                                    alt={item.nome} title={item.nome}/>
                            </figure>
                            <figcaption>
                                <br/>
                                {item.nome} {item.descricao}
                                <hr/>
                                <s>R${item.preco},00</s><br/>
                                <b className="precoDestaque">R${item.preco_venda},00</b>     
                                <br/>
                            </figcaption>
                        </div>
                    </div>
                    );
                }
            })}
        </aside>
    </main>
    );
}

export default Order;