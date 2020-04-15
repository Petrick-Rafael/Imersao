$(document).ready(function() {

    $('.btn-new').click(function(e) {

        e.preventDefault()

        $('.modal-title').empty()
        $('.modal-body').empty()

        $('.modal-title').append('<h4 class="text-danger">Nova Notícia</h4>')

        const dataNoticia = new Date().toLocaleString()

        $('.modal-body').load('src/noticia/visao/form-noticia.html', function() {
            $('#data_noticia').val(dataNoticia)
            $('#data_noticia').attr('readonly', 'true')
            $.ajax({
                type: 'POST',
                dataType: 'json',
                url: 'src/categoria/modelo/all-categoria.php',
                success: function(dados) {
                    for (const dado of dados) {
                        $('#idcategoria').append(`<option value="${dado.idcategoria}">${dado.nome}</option>`)
                    }
                }
            })
        })
        $('.btn-save').attr('data-operation', 'insert')

        $('#modal-noticia').modal('show')
    })
})