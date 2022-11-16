import {Text, FlatList, StyleSheet} from 'react-native';
import React, {Fragment, useEffect, useState} from 'react';
import {carregaProdutores} from '../../../servicos/carregaDados';

export default function Produtores({top: Topo}) {
  const [titulo, setTitulo] = useState('');
  const [lista, setLista] = useState([]);

  useEffect(() => {
    const restorno = carregaProdutores();
    setLista(restorno.lista);
    setTitulo(restorno.titulo);
  }, []);

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
      renderItem={({item: {nome}}) => <Text>{nome}</Text>}
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
