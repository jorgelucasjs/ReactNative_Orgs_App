import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import estrela from ''

export default function Estrelas({
  quantidade: quantidadeAmtiga,
  editavel = false,
  grande = false,
}) {
  return (
    <View>
      <Text>*****</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
