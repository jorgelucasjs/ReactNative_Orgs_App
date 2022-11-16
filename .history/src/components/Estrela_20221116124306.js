import React from 'react';
import estrela from '../assets/estrela.png';
import estrelaCinza from '../assets/estrelaCinza.png';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';

const Estrela = ({onPress, dasabilitada, preenchida}) => {
  const getImagem = () => {
    if (preenchida) {
      return estrela;
    }

    return estrelaCinza;
  };

  return (
	<TouchableOpacity

	onPress={() => setQuantidade(i + 1)}
	disabled={!editavel}>
	<Image source={getImage(i)} style={styles.estrela} />
  </TouchableOpacity>
  );
};

export default Estrela;

const styles = StyleSheet.create({});
