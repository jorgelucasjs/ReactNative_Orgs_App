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
	<TouchableOpacity
	key={i}
	onPress={() => setQuantidade(i + 1)}
	disabled={!editavel}>
	<Image source={getImage(i)} style={styles.estrela} />
  </TouchableOpacity>
  );
};

export default Estrela;

const styles = StyleSheet.create({});
