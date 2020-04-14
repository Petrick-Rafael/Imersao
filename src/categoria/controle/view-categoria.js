$(document).ready(function(){

    $("#table-categoria").on('click','button.btn-view', function(e){

        e.preventDefault()

        $(".modal-title").empty()
        $(".modal-body").empty()

        $(".modal-title").append('<h4 class="text-danger">Visualizar Categoria</h4>')

        let idcategoria = `idcategoria=${$(this).attr('id')}`

        $.ajax({
            type: 'POST',
            dataType: 'json',
            async: true,
            data: idcategoria,
            url: "src/categoria/modelo/view-categoria.php",
            success: function(dado){
                if (dado.tipo == 'success') {
                    $(".modal-body").load("src/categoria/visao/form-categoria.html", function(){

                        $('#nome').val(dado.dados.nome)
                        $('#nome').attr('readonly', 'true')

                    })

                    $("#modal-categoria").modal('show')
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