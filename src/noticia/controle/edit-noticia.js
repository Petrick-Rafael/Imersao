$(document).ready(function(){

    $("#table-noticia").on('click','button.btn-edit', function(e){

        e.preventDefault()

        $(".modal-title").empty()
        $(".modal-body").empty()

        $(".modal-title").append('<h4 class="text-danger">Editar Noticia</h4>')

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

                        if (dado.dados.tipo == 'A') {
                            var tipo = "Administrador";
                        }else{
                            var tipo = "Leitor";
                        }

                        $('#tipo').append(`<option value="">${tipo}</option>`)

                        $("#idnoticia").val(dado.dados.idnoticia)

                    })
                    // $("$btn-save").attr('data-operation','update')
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