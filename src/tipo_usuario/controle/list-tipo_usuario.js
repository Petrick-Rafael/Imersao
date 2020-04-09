$(document).ready(function(){

    $('#table-tipo_usuario').DataTable({
        "prosessing": true,
        "serverSide": true,
        "ajax": {
            "url": "src/tipo_usuario/modelo/list-tipo-usuario.php",
            "type": "POST"
        },
        "language": {
            "url": "dataTables.brazil.json"
        },
        "columns": [
            {
                 "data": 'idtipo_usuario',
                 "className": 'text-center'
            },
            {
                 "data": 'nome',
                 "className": 'text-center'
            },
            { 
                "data": 'tipo',
                "className": 'text-center' 
            },
            {
                "data": 'idtipo_usuario',
                "orderable": false,
                "searchable": false,
                "className": 'text-center',
                "render": function(data, type, row, meta){
                    return `
                        <button id="${data}" class="btn btn-info btn-sm">R</button>
                        <button id="${data}" class="btn btn-primary btn-sm">U</button>
                        <button id="${data}" class="btn btn-danger btn-sm">D</button>
                    `
                }
            }
        ] 
    })
})