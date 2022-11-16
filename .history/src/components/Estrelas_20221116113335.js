import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import estrela from '../assets/estrela.png';
import estrelaCinza from '../assets/estrelaCinza.png';

export default function Estrelas({
  quantidade: quantidadeAmtiga,
  editavel = false,
  grande = false,
}) {
  return (
    <View>
      <Image source={estrela} st/>
    </View>
  );
}

const styles = StyleSheet.create({
	estrela:{
		width: 12,
		height: 12
	}
});
