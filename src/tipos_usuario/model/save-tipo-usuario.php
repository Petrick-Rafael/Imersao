<?php

    include("../../conexao/conexao.php");

    if ($con) {

        $requestData = $_REQUEST;
        
        if (empty($requestData['nome']) || empty($requestData['tipo'])) {
            
            $dados = array(
                "tipo" => 'error',
                "mensagem" => 'Existe(m) campo(s) obrigatório(s) não preenchido(s).'
            );
        }else{

            $idTipoUsuario = isset($requestData['idtipo_usuario']) ? $requestData['idtipo_usuario'] : 0;
            $nome = utf8_decode($requestData['nome']);
            $tipo = $requestData['tipo'];

            if ($requestData['operacao'] == 'insert') {

                $sql = "INSERT INTO tipo_usuarios VALUES (NULL, '$nome', '$tipo')";
            }else{

                $sql = "UPDATE `tipo_usuarios` SET `nome` = '$nome', `tipo` = '$tipo' WHERE `idusuario` = $idTipoUsuario";
            }

            $resultado = mysqli_query($con, $sql);

            if($resultado){

                $dados = array("tipo"=> 'success', "mensagem"=>'Tipo de Usuario salvo com Sucesso!');
            }else{

                $dados = array("tipo" => 'false', "mensagem" => 'Não foi possível salvar o tipo de Usuário');
            }

            mysqli_close($con); 
        }
    } else {
        
        $dados = array(
            "tipo" => 'info',
            "mensagem" => 'Não foi possível conectar ao banco.'

        );
    }
    