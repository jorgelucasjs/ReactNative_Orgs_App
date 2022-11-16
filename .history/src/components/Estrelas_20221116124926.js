import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import estrela from '../assets/estrela.png';
import estrelaCinza from '../assets/estrelaCinza.png';
import Estrela from './Estrela';

export default function Estrelas({
  quantidade: quantidadeAntiga,
  editavel = false,
  grande = false,
}) {
  const [quantidade, setQuantidade] = useState(quantidadeAntiga);

  const RenderEstrelas = () => {
    const listaEstrelas = [];
    for (let i = 0; i < 5; i++) {
      listaEstrelas.push(
	  <Estrelala />);
    }

    return listaEstrelas;
  };

  return (
    <View style={styles.estrelas}>
      <RenderEstrelas />
    </View>
  );
}

const styles = StyleSheet.create({
  estrelas: {
    flexDirection: 'row',
  },,
});
