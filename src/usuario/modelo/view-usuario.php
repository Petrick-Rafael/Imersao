<?php

    include("../../conexao/conexao.php");

    $dados = array(
        'tipo' => 'info',
        'mensagem' => 'Não foi possível conectar ao banco de dados...',
        'dados' => array()
    );
    if ($conexao) {

        $idUsuario = $_REQUEST['idusuario'];

        $sql = "SELECT idusuario, nome, email FROM USUARIOS WHERE idusuario = $idUsuario";

        $resultado = mysqli_query($conexao, $sql);

        if ($resultado) {

            $dadosTipo = array();

            while($row = mysqli_fetch_assoc($resultado)){
                $dadosTipo = array_map('utf8_encode', $row);
            }
            
            $dados = array(
                'tipo' => 'success',
                'mensagem' => '',
                'dados' => $dadosTipo
            );

        }else{
            $dados = array(
                'tipo' => 'error',
                'mensagem' => 'Não foi possível obter os dados do usuario',
                'dados' => array()
            );
        }   
        
        mysqli_close($conexao);
    }

    echo json_encode($dados);