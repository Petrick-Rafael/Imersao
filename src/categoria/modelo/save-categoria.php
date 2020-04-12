<?php

    include('../../conexao/conexao.php');

    if($conexao){

        $requestData = $_REQUEST;

        if(!empty($requestData['nome'])){            

            $idCategoria = isset($requestData['idcategoria']) ? $requestData['idcategoria'] : '';
            $nome = utf8_decode($requestData['nome']);
            $operacao = isset($requestData['operacao']) ? $requestData['operacao'] : '';

            if($operacao == 'insert'){

                $sql = "INSERT INTO categorias VALUES (null, '$nome')";

                $sql = "UPDATE categorias SET nome='$nome' WHERE idcategoria = $idCategoria";
            }

            $resultado = mysqli_query($conexao, $sql);

            if($resultado){

                $dados = array(
                    "tipo" => 'success',
                    "mensagem" => 'Categoria salva com sucesso.'
                );
            } else { 

                $dados = array(
                    "tipo" => 'error',
                    "mensagem" => 'Não foi possível salvar a categoria'
                );
            }           
        }

        $dados = array(
                "tipo" => 'error',
                "mensagem" => 'Existe(m) campo(s) obrigatório(s) não preenchido(s).'
            );

        mysqli_close($conexao);

    } else{

        $dados = array(
            "tipo" => 'info',
            "mensagem" => 'Não foi possível conectar ao banco.'
        );
    }

    echo json_encode($dados);