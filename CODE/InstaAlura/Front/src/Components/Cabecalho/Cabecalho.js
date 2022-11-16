import { StyleSheet, Text, Image, View } from 'react-native'
import React, { Fragment } from 'react'
import img from '../../../assets/avatar.png'
import { styles } from './styles'



export default function Cabecalho({ userName, urlImage }) {
	return (
		<View style={styles.cabecalho}>
			<Image source={{uri: urlImage}} style={styles.userPhoto} />
			<Text>{userName}</Text>
		</View>
	)
}

