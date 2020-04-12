<?php

    include('../../conexao/conexao.php');

    if($conexao){

        $requestData = $_REQUEST;

        if(empty($requestData['nome'])){

            $dados = array(
                "tipo" => 'error',
                "mensagem" => 'Existe(m) campo(s) obrigatório(s) não preenchido(s).'
            );
        } else{

            $idCategoria = isset($requestData['idcategoria']) ? $requestData['idcategoria'] : '';

            $nome = utf8_decode($requestData['nome']);
            $operacao = isset($requestData['operacao']) ? $requestData['operacao'] : '';

            if($operacao == 'insert'){

                $sql = "INSERT INTO categorias VALUES (null, '$nome')";
            } else { 

                $sql = "UPDATE categorias SET nome='$nome' WHERE idcategoria = $idCategoria";
            }

            $resultado = mysqli_query($conexao, $sql);

            if($resultado){

                $dados = array(
                    "tipo" => 'success',
                    "mensagem" => 'Categoria salvo com sucesso.'
                );
            } else {

                $dados = array(
                    "tipo" => 'error',
                    "mensagem" => 'Não foi possível salvar a categoria'
                );

            }

        }

        mysqli_close($conexao);

    } else{

        $dados = array(
            "tipo" => 'info',
            "mensagem" => 'Não foi possível conectar ao banco.'
        );
    }
    echo json_encode($dados);