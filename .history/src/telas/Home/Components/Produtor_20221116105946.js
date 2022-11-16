import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function Produtor({nome, imagem, distancia, estrelas}) {
  return (
    <View>
		<Image source={image}/>
      <View>
	  <Text>{nome}</Text>
	  <Text>{distancia}</Text>
	  </View>
    </View>
  );
}

const styles = StyleSheet.create({});
