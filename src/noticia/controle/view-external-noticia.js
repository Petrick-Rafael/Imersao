$(document).ready(function(){

    $('.btn-view').click(function(e){

        e.preventDefault()

        var idnoticia = `idnoticia=${$(this).attr('id')}`

        $("#content").load('src/noticia/visao/view-noticia.html', function(){
            
            $.ajax({
            type: 'POST',
            dataType: 'json',
            async: true,
            data: idnoticia,
            url: "src/noticia/modelo/view-noticia.php",
            success: function(dado){
                if (dado.tipo == 'success') {
                    $('#view-noticia').append(` 
                    <h1 class="text-center text-primary">${dado.dados.titulo}</h1>
                    <h4 class="text-center">Categoria</h4>
                    <img class="img-fluid" src="src/noticia/modelo/${dado.dados.imagem}" alt="">
                    <p class="text-justify">${dado.dados.corpo}</p>
                    <p>Postado em: ${dado.dados.data_noticia}</p>`)
                }else{
                    Swal.fire({ // Inicialização do SweetAlert
                        title: 'SysBlog', // Título da janela SweetAler
                        text: dados.mensagem, // Mensagem retornada do microserviço
                        type: dados.tipo, // Tipo de retorno [success, info ou error]
                        confirmButtonText: 'OK'
                    })
                }
            
            }        
    })
})        
})
})