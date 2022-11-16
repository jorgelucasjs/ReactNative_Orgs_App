/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView} from 'react-native';
import Index from './src/telas/Home/Index';
import {StyleSheet} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.tela}>
      <Index />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  tela: {
    flex: 1,
	backgroundColor: '#ff0'
  },
});
export default App;
