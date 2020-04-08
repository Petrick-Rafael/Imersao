$(document).ready(function() {
    $('.btn-new').click(function(e) {

        e.preventDefault()

        $('.modal-title').empty()
        $('.modal-body').empty()

        $('.modal-title').append('<h4 class="text-danger">Novo Tipo de Usuário</h4>')


        $('.modal-body').load('src/tipos_usuario/view/form-tipo-usuario.html')

      
        $('.btn-save').attr('data-operation', 'insert')
        
        $('#modal-tipo-usuario').modal('show')
    })
})