import {Text, FlatList, StyleSheet} from 'react-native';
import React, {Fragment, useEffect, useState} from 'react';
import {carregaProdutores} from '../../../servicos/carregaDados';
import Topo from './Topo';
import Produtor from './Produtor';
import useProdutores from '9';

export default function Produtores() {
  /* const [titulo, setTitulo] = useState('');
  const [lista, setLista] = useState([]);

  useEffect(() => {
    const restorno = carregaProdutores();
    setLista(restorno.lista);
    setTitulo(restorno.titulo);
  }, []);
 */

  const [] = useProdutorestores()



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
