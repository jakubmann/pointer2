import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

const BackButton = ({ onPress }) => {
	return (
		<TouchableOpacity onPress={onPress} style={styles.container}>
			<Ionicons name="md-chevron-back-outline" size={30} color="black" />
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	container: {
		marginTop: 40,
		marginLeft: 20,
		position: 'absolute',
		zIndex: 1,
	},
})

export default BackButton
