$(document).ready(function(){

    $("#table-noticia").on('click','button.btn-view', function(e){

        e.preventDefault()

        $(".modal-title").empty()
        $(".modal-body").empty()

        $(".modal-title").append('<h4 class="text-danger">Visualizar Noticia</h4>')

        let idnoticia = `idnoticia=${$(this).attr('id')}`

        $.ajax({
            type: 'POST',
            dataType: 'json',
            async: true,
            data: idnoticia,
            url: "src/noticia/modelo/view-noticia.php",
            success: function(dado){
                if (dado.tipo == 'success') {
                    $(".modal-body").load("src/noticia/visao/form-noticia.html", function(){

                        $('#nome').val(dado.dados.nome)
                        $('#nome').attr('readonly', 'true')

                        $('#data_noticia').val(dado.dados.data_noticia)
                        $('#data_noticia').attr('readonly', 'true')

                        $('#titulo').val(dado.dados.titulo)
                        $('#titulo').attr('readonly', 'true')

                        $('#corpo').val(dado.dados.corpo)
                        $('#corpo').attr('readonly', 'true')

                        $('#imagem').val(dado.dados.imagem)
                        $('#imagem').attr('readonly', 'true')

                    })

                    $("#modal-noticia").modal('show')
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