import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';

import logo from '../../../assets/logo.png';
import {carregaTopo} from '../../../servicos/carregaDados';

const Topo = () => {
  const [welcome, setWelcome] = useState({});

  useEffect(() => {
    const restorno = carregaTopo();
    console.log(restorno);
    setWelcome(restorno);
  }, []);

  return (
    <View style={styles.topo}>
      <Image source={logo} style={styles.image} />
      <Text style={styles.boasVindas}>{welcome.boasVindas}</Text>
      <Text style={styles.legenda}></Text>
    </View>
  );
};

export default Topo;

const styles = StyleSheet.create({
  topo: {
    backgroundColor: '#F6F6F6',
    padding: 16,
  },
  image: {
    width: 70,
    height: 28,
  },
  boasVindas: {
    marginTop: 24,
    fontSize: 26,
    lineHeight: 42,
    fontWeight: 'bold',
  },
  legenda: {
    fontSize: 16,
    lineHeight: 26,
  },
});
