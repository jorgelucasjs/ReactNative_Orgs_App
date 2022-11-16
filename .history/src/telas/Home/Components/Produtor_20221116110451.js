import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function Produtor({nome, imagem, distancia, estrelas}) {
  return (
    <View style={styles.cartao}>
      <Image source={imagem} />
      <View>
        <Text>{nome}</Text>
        <Text>{distancia}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cartao: {
    backgroundColor: '#F6F6F6',
    marginVertical: 8,
    marginHorizontal: 16,
	borderRadius: 6,
	flexDirection: 'row',
  },
});
