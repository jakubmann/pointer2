import React from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { centered } from '../styles/common'

import colors from '../styles/colors'

const NavIcon = ({ name, onPress }) => {
	return (
		<TouchableOpacity style={styles.container} onPress={onPress}>
			<Ionicons
				style={styles.icon}
				name={name}
				size={30}
				color={colors.primary}
			/>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	container: {
		...centered,
		display: 'flex',
		margin: 10,
	},
	icon: {},
})

export default NavIcon
