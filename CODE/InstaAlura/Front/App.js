import { Fragment, useEffect, useState } from 'react';
import { StatusBar, FlatList, SafeAreaView } from 'react-native';
import img from './assets/alura.jpg';
import lerFotos from './src/api/feed';
import Cabecalho from './src/Components/Cabecalho';
import Comentario from './src/Components/Comentario';
import Foto from './src/Components/Foto';
export default function App() {

	const [fotos, setFotos] = useState([]);

	useEffect(()=>{
		lerFotos().then((res)=>{
			setFotos(res);
		});
	}, []);

	return (
		<SafeAreaView>
			<StatusBar />
			<FlatList 
				data={fotos}
				keyExtractor={(item)=> item.id.toString()}
				renderItem={({item})=>
				<Fragment >
					<Cabecalho userName={item.userName} urlImage={item.userURL}/>
					<Foto urlFoto={item.url} descricao={item.description} qntLikes={item.likes}/>
					<Comentario comentario={item.comentarios}/>
				</Fragment>	}
			/>
		</SafeAreaView>
	);
}
