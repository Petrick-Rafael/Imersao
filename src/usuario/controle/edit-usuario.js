$(document).ready(function(){

    $("#table-usuario").on('click','button.btn-edit', function(e){

        e.preventDefault()

        $(".modal-title").empty()
        $(".modal-body").empty()

        $(".modal-title").append('<h4 class="text-danger">Editar Usuario</h4>')

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

                        $('#email').val(dado.dados.email)

                        $('#senha').val(dado.dados.senha)

                        if (dado.dados.tipo == 'A') {
                            var tipo = "Administrador";
                        }else{
                            var tipo = "Leitor";
                        }

                        $('#tipo_usuario').append(`<option value="">${tipo}</option>`)

                        $("#idusuario").val(dado.dados.idusuario)

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