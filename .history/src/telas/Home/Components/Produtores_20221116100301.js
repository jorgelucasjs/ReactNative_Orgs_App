import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {carregaProdutores} from '../../../servicos/carregaDados';

export default function Produtores() {
  const [lista, setLista] = useState([]);

  useEffect(() => {
    const restorno = carregaProdutores();
    setLista(restorno);
  }, []);

  return (
    <FileList 
		data={lista}
		renderItem
	
	
	/>
  );
}
