import {Text, FlatList, StyleSheet} from 'react-native';
import React, {Fragment} from 'react';
import Topo from './Topo';
import Produtor from './Produtor';
import useProdutores from '../../../hooks/useProdutores';

export default function Produtores() {
	
  const [titulo, lista] = useProdutores();

  const TopoLista = () => {
    return (
      <Fragment>
        <Topo />
        <Text style={styles.titulo}>{titulo}</Text>
      </Fragment>
    );
  };

  return (
    <FlatList
      data={lista}
      keyExtractor={({nome}) => nome}
      renderItem={({item}) => <Produtor {...item} />}
      ListHeaderComponent={TopoLista}
    />
  );
}

const styles = StyleSheet.create({
  titulo: {
    fontSize: 20,
    lineHeight: 32,
    marginHorizontal: 16,
    marginTop: 16,
    fontWeight: 'bold',
    color: '#464646',
  },
});
