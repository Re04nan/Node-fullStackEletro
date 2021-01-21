//Clone
export function copiar(event) {
    let btnConf = document.getElementsByClassName("btnComprar");
    let cont = 0, i = 0;

    while (cont <= btnConf.length) {
        if (btnConf[cont] === event) {
            let img = document.getElementsByClassName("imgProduto");
            while (i <= img.length) {
                if (img[i] === img[cont]) {

                    //location.href = "Pedido/id_produto="+event.target.id;
                    
                }
                i++;
            }
        }
        cont++;
    }
}

export function exibirZoom(event) {
    let box = document.createElement("div");
    let fundo = document.createElement("div");
    let button = document.createElement("button");
    let img = document.createElement("img");

    // Style dos elementos
    img.id = "teste";
    img.src = event.target.src;
    img.style = "width: 240px; max-height: 300px; padding-top: 60px;";
    box.style = "z-index: 10; background-color: white; position: fixed; top: 20%; right: 40%; color: black; font-size:20px; vertical-align: text-top; text-align: center; width: 20%; height: 400px; margin: 20px;";
    fundo.style = "z-index: 10; background-color: white;  border-radius: 10% 0 10% 0; border: 2px solid black; position: fixed; top: 15%; width: 60%; height: 500px;"
    button.style = "cursor: pointer; width: 80px; height: 40px; text-align: center; background-color: red; color: white; font-size: 22px; font-weight: bold; position: fixed; border: 0px; margin-left: 725px;";

    // Botão para fechar
    button.innerHTML = "Close X";
    button.addEventListener("click", function () { 
        box.remove(); 
        fundo.remove();
    });
    fundo.appendChild(button);
    // imagem
    box.innerHTML = event.target.alt;
    box.appendChild(img);
    // Div zoom
    document.querySelector("#container").appendChild(fundo);
    document.querySelector("#container").appendChild(box);

}
// efeito mouse
export function efeitoTela (event) {
        event.target.style = "background-color: black; padding: 8px; border-radius: 20px";
}
// limpar
export function limpar(event){
        event.target.style = "background-color: none";
}
