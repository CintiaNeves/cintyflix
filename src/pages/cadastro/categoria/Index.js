import React, { useState, useEffect} from 'react';
import PageDefault from '../../../componentes/PageDefault/Index.js';
import { Link } from 'react-router-dom';
import FormField from '../../../componentes/FormField/Index.js';
import Button from '../../../componentes/Button/Index.js';

function CadastroCategoria(){

  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  }
  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave, valor){
    setValues({
      ...values,
      [chave]: valor,
    })
  }
  function handleChange(event){
    setValue(
      event.target.getAttribute('name'), 
      event.target.value
    );
  }

  useEffect(() =>{
    const url = 'http://localhost:8080/categorias';
    
    fetch(url)
      .then(async (response) => {
        const categorias = await response.json();
        setCategorias([
          ...categorias,
        ]);
      })
  }, []);


    return(
      <PageDefault>
        <h1>Cadastro de categoria: {values.nome} </h1>
        <form onSubmit={function handleSubmit(event){
          event.preventDefault();
          setCategorias([
            ...categorias,
            values
          ]);

          setValues(valoresIniciais);
        }}> 

        <FormField 
          label="Nome da categoria"
          type="text"
          name="nome"
          value={values.nome}
          onChange={handleChange}
        />

        <FormField 
          label="Descrição"
          type="textarea"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        />

        <FormField 
          label="Cor"
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleChange}
        />

          <Button>
            Cadastrar
          </Button>
        </form>

        <ul>
          {categorias.map((categoria, indice) => {
            return(
              <li key={`${categoria}${indice}`}>
                {categoria.nome}
              </li>
            );
          })}
        </ul>

        <Link to='/'> 
            Ir para Home
        </Link>
      </PageDefault>
    );
}

export default CadastroCategoria;