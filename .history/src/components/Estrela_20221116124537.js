import React from 'react';
import estrela from '../assets/estrela.png';
import estrelaCinza from '../assets/estrelaCinza.png';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';

const Estrela = ({
	onPress, 
	dasabilitada = true, 
	preenchida
}) => {
  const getImagem = () => {
    if (preenchida) {
      return estrela;
    }

    return estrelaCinza;
  };

  return (
    <TouchableOpacity onPress={onPress} disabled={dasabilitada}>
      <Image source={getImagem()} style={styles.estrela} />
    </TouchableOpacity>
  );
};

export default Estrela;

const stylesFunction = grande =>
  StyleSheet.create({
    estrela: {
      width: grande ? 36 : 12,
      height: grande ? 36 : 12,
      marginRight: 2,
    },
  });

