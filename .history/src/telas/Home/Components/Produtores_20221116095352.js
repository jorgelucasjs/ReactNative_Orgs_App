import {View, Text} from 'react-native';
import React from 'react';
import { carregaProdutores } from '../../../../.history/src/servicos/carregaDados_20221116090756';

export default function Produtores() {
	const [welcome, setWelcome] = useState({});

	useEffect(() => {
	  const restorno = carregaProdutores();
	  setWelcome(restorno);
	}, []);


  return (
    <View>
      <Text>Produtores</Text>
    </View>
  );
}
