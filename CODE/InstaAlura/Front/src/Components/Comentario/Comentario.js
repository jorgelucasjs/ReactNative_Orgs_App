import { View, Text, FlatList, TextInput, Image, TouchableOpacity } from 'react-native'
import React, { Fragment, useState } from 'react'
import { styles } from './styles';

export default function Comentario({ comentario }) {
	const [esteComentario, setComentarios] = useState(comentario);
	let conteudoCanpuInput = '';
	let campoInput;

	const adicionarComentario = ()=>{
		campoInput.clear();

		const novoComentario = {
			date: Date.now(),
			text: conteudoCanpuInput,
			userName: 'Jorge Lucas'
		};

		setComentarios([...esteComentario, novoComentario]);

	};

	

	return (
		<Fragment>
			<FlatList
				data={esteComentario}
				keyExtractor={(item, index) => index.toString()}
				renderItem={({ item }) =>
					<View style={styles.naMesmaLinha}>
						<Text>{item.userName}</Text>
						<Text>{item.text}</Text>
					</View>
				}
			/>

			<View style={styles.naMesmaLinha}>
				<TextInput 
					placeholder='Deixe seu comentário...' 
					style={{flex: 1, margin: 5}}
					onChangeText={texto => conteudoCanpuInput = texto}
					ref={textInput => campoInput = textInput}
				/>
				<TouchableOpacity onPress={adicionarComentario}>
					<Image source={require('../../../assets/send.png')} style={styles.imgSend}/>
				</TouchableOpacity>
			</View>
		</Fragment>
	)
}