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
	progress: {
		backgroundColor: colors.secondary,
		flex: 1,
		width: '40%',
		borderRadius: 15,
	},
	outline: {
		borderWidth: 1,
		borderRadius: 15,
		borderColor: colors.primary,
		height: 30,
	},
	container: {
		flexBasis: '60%',
		margin: 10,
		justifyContent: 'center',
	},
})
export default StatusBar
