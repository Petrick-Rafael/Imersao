$(document).ready(function(){

    $("#table-usuario").on('click','button.btn-view', function(e){

        e.preventDefault()

        $(".modal-title").empty()
        $(".modal-body").empty()

        $(".modal-title").append('<h4 class="text-danger">Visualizar Usuário</h4>')

        let idusuario = `idusuario=${$(this).attr('id')}`

        $.ajax({
            type: 'POST',
            dataType: 'json',
            async: true,
            data: idusuario,
            url: "src/usuario/modelo/view-usuario.php",
            success: function(dado){
                if (dado.tipo == 'success') {
                    $(".modal-body").load("src/usuario/visao/form-usuario.html", function(){

                        $('#nome').val(dado.dados.nome)
                        $('#nome').attr('readonly', 'true')

                        $('#email').val(dado.dados.email)
                        $('#email').attr('readonly', 'true')

                        $('#nome').val(dado.dados.nome)
                        $('#nome').attr('readonly', 'true')

                        $('#tipo_usuario').empty()

                        if (dado.dados.tipo_usuario == 'A') {
                            var tipo = "Administrador";
                        }else{
                            var tipo = "Leitor";
                        }

                        $('#tipo_usuario').append(`<option value="">${tipo}</option>`)
                        $('#tipo_usuario').attr('readonly', 'true')

                    })

                    $("#modal-usuario").modal('show')
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