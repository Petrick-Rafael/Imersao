$(document).ready(function(){

    $("#table-tipo_usuario").on('click','button.btn-edit', function(e){

        e.preventDefault()

        $(".modal-title").empty()
        $(".modal-body").empty()

        $(".modal-title").append('<h4 class="text-danger">Visualizar Tipo de Usuário</h4>')

        let idtipo_usuario = `idtipo_usuario=${$(this).attr('id')}`

        $.ajax({
            type: 'POST',
            dataType: 'json',
            async: true,
            data: idtipo_usuario,
            url: "src/tipo_usuario/modelo/view-tipo_usuario.php",
            success: function(dado){
                if (dado.tipo == 'success') {
                    $(".modal-body").load("src/tipo_usuario/visao/form-tipo-usuario.html", function(){

                        $('#nome').val(dado.dados.nome)

                        if (dado.dados.tipo == 'A') {
                            var tipo = "Administrador";
                        }else{
                            var tipo = "Leitor";
                        }

                        $('#tipo').append(`<option value="">${tipo}</option>`)

                        $("#idtipo_usuario").val(dado.dados.idtipo_usuario)

                    })
                    // $("$btn-save").attr('data-operation','update')
                    $("#modal-tipo-usuario").modal('show')
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