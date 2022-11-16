import { StyleSheet, Dimensions} from 'react-native'

const largura = Dimensions.get('screen').width;

export  const styles = StyleSheet.create({
	image: {
		height: largura,
		width: largura
	},
	like:{
		width: 40,
		height: 40,
		margin: 5
	},
	viewLike: {
		flexDirection: 'row',
		alignItems: 'center'
	}
})