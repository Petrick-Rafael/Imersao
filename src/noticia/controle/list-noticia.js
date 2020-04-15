$(document).ready(function() {

    $('#table-noticia').DataTable({
        "processing": true, 
        "serverSide": true, 
        "ajax": { 
            "url": "src/noticia/modelo/list-noticia.php",
            "type": "POST"
        },
        "language": { 
            "url": "dataTables.brazil.json"
        },
        "columns": [{
                "data": 'idnoticia',
                "className": 'text-center' 
            },
            {
                "data": 'data_noticia',
                "className": 'text-center'
            },
            {
                "data": 'titulo',
                "className": 'text-center'
            },
            {   
                "data": 'idnoticia',
                "orderable": false, 
                "searchable": false, 
                "className": 'text-center',
                "render": function(data, type, row, meta) {
                    return `
                    <button id="${data}" class="btn btn-info btn-sm btn-view"><i class="mdi mdi-eye"></i></button>
                    <button id="${data}" class="btn btn-primary btn-sm btn-edit"><i class="mdi mdi-pencil"></i></button>
                    <button id="${data}" class="btn btn-danger btn-sm btn-del"><i class="mdi mdi-trash-can"></i></button>
                    `
                }
            }
        ]
    })
})