import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {carregaProdutores} from '../../../servicos/carregaDados';

export default function Produtores() {
  const [welcome, setWelcome] = useState({});

  useEffect(() => {
    const restorno = carregaProdutores();
	console.log('Produtores ')
    setWelcome(restorno);
  }, []);

  return (
    <View>
      <Text>Produtores</Text>
    </View>
  );
}
