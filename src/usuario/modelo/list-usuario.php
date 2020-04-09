<?php

    include('../../conexao/conexao.php');

    if($conexao){

        $requestData = $_REQUEST;
        
        $colunas = $requestData['columns'];

        $sql = "SELECT u.idusuario, u.nome, u.email, t.tipo as tipo_usuario FROM USUARIOS u 
        INNER JOIN TIPOS_USUARIOS ON u.idtipo_usuario = t.idtipo_usuario
        WHERE 1=1 ";

        $resultado = mysqli_query($conexao, $sql);
        $qtdeLinhas = mysqli_num_rows($resultado);

        $filtro = $requestData['search']['value'];

        if( !empty( $filtro ) ){
            $sql .= " AND (u.idusuario LIKE '$filtro%' ";
            $sql .= " OR u.ome LIKE '$filtro%' ";
            $sql .= " OR u.email LIKE '$filtro%') ";
            $sql .= " OR t.nome LIKE '$filtro%') ";
        }
        $resultado = mysqli_query($conexao, $sql);
        $totalFiltrados = mysqli_num_rows($resultado);

        $colunaOrdem = $requestData['order'][0]['column'];
        $ordem = $colunas[$colunaOrdem]['data'];
        $direcao = $requestData['order'][0]['dir'];

        $inicio = $requestData['start'];
        $tamanho = $requestData['length'];

        $sql .= " ORDER BY $ordem $direcao LIMIT $inicio, $tamanho ";
        $resultado = mysqli_query($conexao, $sql);
        $dados = array();
        while ($row = mysqli_fetch_assoc($resultado)) {
            $dados[] = array_map('utf8_encode', $row);
        }

        $jsonData = array(
            "draw" => intval($requestData['draw']),
            "recordsTotal" => intval($qtdeLinhas),
            "recordsFiltered" => intval($totalFiltrados),
            "data" => $dados
        );

        mysqli_close($conexao);

    }else{

        $jsonData = array(
            "draw" => 0,
            "recordsTotal" => 0,
            "recordsFiltered" => 0,
            "data" => array()
        );
    }

    echo json_encode($jsonData);