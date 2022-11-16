import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Estrela = ({
	onPress,
	dasabilitada,
	preenchida
}) => {

	const getImage = index => {
		if (index < quantidade) {
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
