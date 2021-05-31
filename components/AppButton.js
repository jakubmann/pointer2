import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import { button, buttonText } from '../styles/common'

const AppButton = ({ title, onPress, ...props }) => {
	return (
		<TouchableOpacity
			style={[styles.button, { ...props.style }]}
			onPress={onPress}
		>
			<Text style={styles.text}>{title}</Text>
		</TouchableOpacity>
	)
}

const styles = {
	button: {
		...button,
	},
	text: {
		...buttonText,
	},
}

export default AppButton
