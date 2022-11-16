import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import logo from '../../../assets/logo.png';
const Topo = () => {
  return (
    <View>
      <Image source={logo} />
      <Text>Ol</Text>
    </View>
  );
};

export default Topo;

const styles = StyleSheet.create({});
