import React from 'react';
import PageDefault from '../../../componentes/PageDefault/Index.js';
import { Link } from 'react-router-dom';

function CadastroVideo(){
    return(
      <PageDefault>
        <h1>Cadastro de vídeos</h1>

        <Link to='/cadastro/categoria'> 
            Cadastrar categoria
        </Link>
      </PageDefault>
    );
}

export default CadastroVideo;