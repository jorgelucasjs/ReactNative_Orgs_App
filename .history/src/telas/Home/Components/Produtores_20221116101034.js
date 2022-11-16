import {Text, FlatList} from 'react-native';
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

  return (
    <FlatList
      data={lista}
      renderItem={({item: {nome}}) => <Text>{nome}</Text>}
      ListHeaderComponent={() => <Text>{titulo}</Text>}
    />
  );
}

const styles = StyleSheet.create()
