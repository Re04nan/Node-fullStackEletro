import React from 'react';

import './styles.css';
import email from '../imagens/email.png';
import whatsapp from '../imagens/whatsapp.png';

const Contact = () => {
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
			<form id="formContato" className="form-group align-items text-primary">
				<h4><label for="nome">Nome:</label> </h4>
				<input className="form-control border border-primary" type="text" name="nome" placeholder="Digite seu nome completo aqui..."/>
				<h4><label for="msg">Mensagem:</label> </h4>
				<textarea className="form-control border border-primary" rows="4" name="msg" placeholder="Digite sua mensagem aqui..."></textarea>
				<p><button className="btn btn-primary mt-2" value="Enviar">Enviar</button></p>
			</form>
			<br/>
		</section>
	</main>

    );
}

export default Contact;