$(document).ready(function(){

    $('#btn-new').click(function(e){

        e.preventDefaut()

        $('.modal-title').empty()
        $('.modal-body').empty()

        $('.modal-title').append("Novo Tipo de Usuário")
        $('.modal-body').load('../view/form-tipo-usuario.html')

        $('#modal').modal('show')
   })
})