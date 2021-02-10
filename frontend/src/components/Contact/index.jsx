import React, {useState, useEffect} from 'react';

import './styles.css';
import email from '../imagens/email.png';
import whatsapp from '../imagens/whatsapp.png';

const Contact = () => {
	const [confirmar, setConfirmar] = useState("");
	const [comentarios, setComentarios] = useState([])
	const [updateMensagem, setUpdateMensagem] = useState({
		nome: "",
		msg: ""
	})
	function alterar (event){
		setUpdateMensagem({
			...updateMensagem,
			[event.target.id] : event.target.value
		})
	}

	useEffect(()=>{
		const url = "http://localhost:3002/Comentarios";
		fetch(url).then(res => res.json()).then(resposta =>{
			setComentarios(resposta);
		});
	},[])

	async function enviaMsg (event){
		event.preventDefault();
		const url = "http://localhost:3002/Contatos";
		const {nome, msg} = event.target;
		let obj = {
			"nome" : nome.value,
			"msg" : msg.value
		}
		await fetch(url, {
			method: "POST",
			headers: { "Content-Type" : "application/json"},
			body: JSON.stringify(obj)
		}).then(res => res.json()).then( resposta=> {
			if(resposta.resultado === true){
				setConfirmar("Enviado com sucesso!");
				setTimeout(()=>{
					setConfirmar("");
				}, 4000);
			} else {
				setConfirmar("Erro ao enviar mensagem!");
				setTimeout(()=>{
					setConfirmar("");
				}, 4000);
			}
		})
	}
    return(
        <main className="container-fluid">
		<header className="text-primary">
			<h2>Contato</h2>
			<hr/>
		</header>

		<section id="secContatos">
			<div className="divContatos container">
				<figure>
					<img className="iconeRS" src={email} alt="Endereço de Mensagem" title="Ícone de envelope"/>
					<b>contato@fullstackeletro.com</b>
				</figure>
				<figure>
					<img className="iconeRS" src={whatsapp} alt="Whatsapp" title="Ícone de Whatsapp"/>
					<b>(11) 9999-9999</b>
				</figure>
			</div>
			
			<form onSubmit={enviaMsg} id="formContato" className="form-group align-items text-primary">
				<label style={{color: 'orange'}}>{confirmar}</label>
				<h4><label for="nome">Nome:</label> </h4>
				<input onChange={alterar} id="nome" className="form-control border border-primary" type="text" name="nome" placeholder="Digite seu nome completo aqui..."/>
				<h4><label for="msg">Mensagem:</label> </h4>
				<textarea onChange={alterar} id="msg" className="form-control border border-primary" rows="4" name="msg" placeholder="Digite sua mensagem aqui..."></textarea>
				<p><button className="btn btn-primary mt-2" value="Enviar">Enviar</button></p>
			</form>
			<br/>
			<header>
				<h2 style={{textAlign: "center"}}>Comentários</h2>
			</header>
			<article style={{
					display: "flex",
					justifyContent: "center",
					width: "90vw",
					margin: "1em"
					}}>
				{comentarios.map((msg, index) =>{
					return(					
						<div key={index} style={{
							color: "white",
							fontSize: "0.8em",
							width: "30vw",
							margin: "1em",
							lineHeight: "5vh"
							}} className="card-body bg-primary">
							<p>{msg.mensagem}</p>
							<cite className="text-right">- {msg.nome}</cite>
						</div>
					)
				})}
				</article>
		</section>
	</main>

    );
}

export default Contact;