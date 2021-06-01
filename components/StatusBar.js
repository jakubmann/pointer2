import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import colors from '../styles/colors'

const StatusBar = () => {
	return (
		<View style={styles.container}>
			<View style={styles.outline}>
				<View style={styles.progress}></View>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flexBasis: '60%',
		justifyContent: 'center',
		margin: 10,
	},
	outline: {
		borderColor: colors.primary,
		borderRadius: 15,
		borderWidth: 1,
		height: 30,
	},
	progress: {
		backgroundColor: colors.secondary,
		borderRadius: 15,
		flex: 1,
		width: '40%',
	},
})
export default StatusBar
