import {Text, FlatList, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import {carregaProdutores} from '../../../servicos/carregaDados';

export default function Produtores() {
  const [titulo, setTitulo] = useState('');
  const [lista, setLista] = useState([]);

  useEffect(() => {
    const restorno = carregaProdutores();
    setLista(restorno.lista);
    setTitulo(restorno.titulo);
  }, []);

  const TopoLista =()=>{
	return <Text>{titulo}</Text>
  }
  return (
    <FlatList
      data={lista}
      renderItem={({item: {nome}}) => <Text>{nome}</Text>}
      ListHeaderComponent={() => }
    />
  );
}

const styles = StyleSheet.create({
	titulo:{

	}
});
