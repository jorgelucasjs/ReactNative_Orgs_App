import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import estrela from '../assets/estrela.png';
import estrelaCinza from '../assets/estrelaCinza.png';

export default function Estrelas({
  quantidade: quantidadeAmtiga,
  editavel = false,
  grande = false,
}) {
  const styles = stylesFunction(grande);

  const RenderEstrelas = () => {
	const listaEstrelas = [];
	
  };

  return (
    <View style={styles.estrelas}>
      <Image source={estrela} style={styles.estrela} />
      <Image source={estrela} style={styles.estrela} />
    </View>
  );
}

const stylesFunction = grande =>
  StyleSheet.create({
    estrelas: {
      flexDirection: 'row',
    },
    estrela: {
      width: grande ? 36 : 12,
      height: grande ? 36 : 12,
      marginRight: 2,
    },
  });
