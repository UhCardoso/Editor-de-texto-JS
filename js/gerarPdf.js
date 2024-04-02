function gerarPDF() {
    // Obter o elemento textarea
    var texto = document.getElementById("texto");

    // Cria um elemento div para colocar o texto e converter para imagem
    var divParaImagem = document.createElement('div');
    divParaImagem.innerHTML = texto.value;
    divParaImagem.style.display = "inline-block";
    divParaImagem.style.width = '600px'
    divParaImagem.style.height = '594px'
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

        // salva pdf
        html2canvas(canvas, { scale: 2 }).then(canva => {
            // Cria uma instância do jsPDF
            const pdf = new jspdf.jsPDF();

            // Adiciona a imagem ao PDF. A imagem é o canvas gerado pelo html2canvas
            pdf.addImage(canva.toDataURL("image/png"), "PNG", 0, 0, pdf.internal.pageSize.getWidth(), pdf.internal.pageSize.getHeight());

            // Salva o PDF gerado
            pdf.save("my-text.pdf");

            // Remover a divParaImagem após salvar o PDF
            document.body.removeChild(divParaImagem);

            // Remover div imagemResultado inteira após o download
            if (divImagemResultado) {
                divImagemResultado.parentNode.removeChild(divImagemResultado);
            }
        });

        // Remove a div temporária

    });
}