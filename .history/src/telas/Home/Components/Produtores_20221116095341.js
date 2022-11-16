import {View, Text} from 'react-native';
import React from 'react';

export default function Produtores() {
	const [welcome, setWelcome] = useState({});

	useEffect(() => {
	  const restorno = carregaTopo();
	  setWelcome(restorno);
	}, []);
  return (
    <View>
      <Text>Produtores</Text>
    </View>
  );
}
