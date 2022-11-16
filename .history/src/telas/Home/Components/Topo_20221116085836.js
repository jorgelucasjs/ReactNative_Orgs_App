import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import logo from '../../../assets/logo.png';
const Topo = () => {
  return (
    <View style={styles.topo}>
      <Image source={logo} style={styles.image} />
      <Text>Olá Jorge</Text>
      <Text>Encontre os melhores produtores</Text>
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
  boasVindas:{
	marginTop;
  }
});
