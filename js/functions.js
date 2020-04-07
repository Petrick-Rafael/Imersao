$(document).ready(function(){
    $('#tipo-usuario').click(function(){
        $('#conteudo').empty()
        $('#conteudo').load("src/tipos_usuario/view/list-tipo-usuario.html")
    })
})