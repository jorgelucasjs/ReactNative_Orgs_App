import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import estrela from '../assets/estrela.png';
import estrelaCinza from '../assets/estrelaCinza.png';

const Estrela = ({onPress, dasabilitada, preenchida}) => {
  const getImagem = () => {
    if (preenchida) {
      return estrela;
    }

    return estrelaCinza;
  };

  return (
    <View>
      <Text>Estrela</Text>
    </View>
  );
};

export default Estrela;

const styles = StyleSheet.create({});
