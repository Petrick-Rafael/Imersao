$(document).ready(function() {
    $('#tipo-usuario').click(function() {
        $('#conteudo').empty()
        $('#conteudo').load('src/tipo_usuario/visao/list-tipo-usuario.html')
    })

    $('#usuario').click(function() {
        $('#conteudo').empty()
        $('#conteudo').load('src/usuario/visao/list-usuario.html')
    })

    $('#categoria').click(function() {
        $('#conteudo').empty()
        $('#conteudo').load('src/categoria/visao/list-categoria.html')
    })
    
    $('#noticia').click(function() {
        $('#conteudo').empty()
        $('#conteudo').load('src/noticia/visao/list-noticia.html')
    })

    $('#comentario').click(function() {
        $('#conteudo').empty()
        $('#conteudo').load('src/comentario/visao/list-comentario.html')
    })
    //fim das funcionalidades do menu - painel gerencial


    //Menu do blog
    $('#content').load('src/noticia/visao/last-noticia.html')
    $("#initial").click(function(){
        $("#content").load("index.html")
    })

    $('#subscript').click(function(){
        $("#content").load('src/usuario/visao/form-usuario.html', function(){
            
            $("#form-usuario").before('<h1 class="display-4 text-center text-white">Blog de Notícias</h1>')
            $("#tipo_usuario").after('<input type="hidden" name="idtipo_usuario" value="2">')
            $("#tipo_usuario").after('<button type="button" class="btn btn-primary btn-save">Salvar mudanças</button>')
            $("#lb-tipo").hide()
            $("#tipo_usuario").hide()
            $('.btn-save').attr('data-operation', 'insert')
        })
        $('body').append('<script src="src/usuario/controle/save-usuario.js"></script>')
    })
})