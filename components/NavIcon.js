import React from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

const NavIcon = ({ name, onPress }) => {
	return (
		<TouchableOpacity style={styles.container} onPress={onPress}>
			<Ionicons style={styles.icon} name={name} size={30} color="black" />
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	container: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		margin: 10,
	},
	icon: {},
})

export default NavIcon
