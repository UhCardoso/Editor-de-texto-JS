function gerarImagem() {
    // Obter o elemento textarea
    var texto = document.getElementById("texto");

    // Cria um elemento div para colocar o texto e converter para imagem
    var divParaImagem = document.createElement('div');
    divParaImagem.innerHTML = texto.value;
    divParaImagem.style.display = "inline-block";
    divParaImagem.style.width = '535px'
    divParaImagem.style.height = '600px'
    divParaImagem.style.padding = "20px";
    divParaImagem.style.background = "white";
    divParaImagem.style.border = "1px solid #ccc";

    // Adiciona a div temporária ao body para renderizar o texto
    document.body.appendChild(divParaImagem);

    // Usa html2canvas para converter a div em uma imagem
    html2canvas(divParaImagem).then(canvas => {
        // Adiciona o canvas (imagem) ao div de resultado
        var divImagemResultado = document.getElementById("imagemResultado");
        // Limpa resultados anteriores
        divImagemResultado.innerHTML = "";
        divImagemResultado.appendChild(canvas);

        // Faz download da imagem
        html2canvas(canvas, { scale: 2 }).then(canva => {
            // Cria um elemento de imagem
            var img = canva.toDataURL("image/jpeg");

            // Cria um link para download
            var link = document.createElement('a');
            link.href = img;
            link.download = 'my-text.jpg';

            // Simula um clique no link para iniciar o download
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

            document.body.removeChild(divParaImagem);

            // Remover a div de resultado após o download
            var divParaRemover = document.getElementById("imagemResultado");
            if (divParaRemover) { // Verifica se o elemento existe antes de tentar removê-lo
                divParaRemover.parentNode.removeChild(divParaRemover);
            }
        });
    });
}