import { Fragment, useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import img from '../../../assets/alura.jpg';
import { curtiuFoto, imageLike } from '../../api/curtidas';

export default function Foto({ urlFoto, descricao, qntLikes }) {

	const [curtiu, setCurtiu] = useState(false);
	const [likes, setLikes] = useState(qntLikes);

	const clicouCurtir = () => {
		const [novoEstCurtiu, qnt] = curtiuFoto(curtiu, likes);
		setLikes(qnt);
		setCurtiu(novoEstCurtiu);
	}

	return (
		<Fragment>
			<Image source={{ uri: urlFoto }} style={styles.image} />
			<Text>{descricao}</Text>

			<View style={styles.viewLike}>
				<TouchableOpacity onPress={clicouCurtir}>
					<Image style={styles.like} source={imageLike(curtiu)} />
				</TouchableOpacity>

				<Text>curtidas {likes}</Text>
			</View>

		</Fragment>
	);
}



