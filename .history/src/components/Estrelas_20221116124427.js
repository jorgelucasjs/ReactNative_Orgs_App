import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import estrela from '../assets/estrela.png';
import estrelaCinza from '../assets/estrelaCinza.png';

export default function Estrelas({
  quantidade: quantidadeAntiga,
  editavel = false,
  grande = false,
}) {
  const [quantidade, setQuantidade] = useState(quantidadeAntiga);
  const styles = stylesFunction(grande);

/*   const getImage = index => {
    if (index < quantidade) {
      return estrela;
    }

    return estrelaCinza;
  }; */

  const RenderEstrelas = () => {
    const listaEstrelas = [];
    for (let i = 0; i < 5; i++) {
      listaEstrelas.push(
        ,
      );
    }

    return listaEstrelas;
  };

  return (
    <View style={styles.estrelas}>
      <RenderEstrelas />
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
