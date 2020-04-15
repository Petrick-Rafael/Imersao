$(document).ready(function() {

    $(".btn-save").click(function(e){
        
        e.preventDefault()

        var dados = new FormData(document.getElementById('form-noticia'))
        
        // dados += `&operacao=${$('.btn-save').attr('data-operation')}`

        dados.append("operacao" , $('.btn-save').attr('data-operation'))

        $.ajax({
            type: 'POST', // A primeira informação que dados ao Ajax é como o dados será transmitidos/recebidos [POST / GET]
            dataType: 'json', // Demonstramos para o AJAX como queremos que tudo isso ocorra ==> Assincrono executado em paralelo com o front-end e outro serviços
            data: dados, // Aqui informamos onde estão os dados que seráo transmitidos
            url: 'src/noticia/modelo/save-noticia.php',
            mimeType: 'multipart/form-data',
            cache: false,
            contentType: false,
            processData: false, //Aqui informamos para onde será transmitido os dados
            success: function(dados) { // Aqui criamos a função que receberá o retorno dos dados e os tratamos
                Swal.fire({ // Inicialização do SweetAlert
                    title: 'SysBlog', // Título da janela SweetAler
                    text: dados.mensagem, // Mensagem retornada do microserviço
                    type: dados.tipo, // Tipo de retorno [success, info ou error]
                    confirmButtonText: 'OK'
                })

                // Fechamento do modal
                $('#modal-noticia').modal('hide')
                $('#table-noticia').DataTable().ajax.reload()
            }
        })
    })
})