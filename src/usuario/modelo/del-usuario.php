<?php

    include("../../conexao/conexao.php");

    $dados = array(
        'tipo' => 'info',
        'mensagem' => 'Não foi possível conectar ao banco de dados...'
    );

    if ($conexao) {
        
        $idUsuario = $_REQUEST['idusuario'];

        $sql = "DELETE FROM USUARIOS WHERE idusuario = $idUsuario";

        $resultado = mysqli_query($conexao, $sql);
        
        if ($resultado) {
            
            $dados = array(
                'tipo' => 'success',
                'mensagem' => 'Usuário deletado com sucesso'
            );
        }else{
            $dados = array(
                'tipo' => 'error',
                'mensagem' => 'Não foi possível deletar usuário'
            );
        }

        mysqli_close($conexao);
    }

    echo json_encode($dados);