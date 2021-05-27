import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import colors from '../styles/colors'

const styles = StyleSheet.create({
	activityContainer: {
		width: '33%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	activity: {
		width: 100,
		height: 100,
		margin: 10,
		textAlign: 'center',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 10,
		borderWidth: 1,
		borderColor: colors.black,
	},
})

const CreateActivity = () => {
	return (
		<View style={styles.activityContainer}>
			<View style={styles.activity}>
				<Ionicons name="md-add-outline" size={60} color="black" />
			</View>
		</View>
	)
}

export default CreateActivity
