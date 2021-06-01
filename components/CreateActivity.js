import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import colors from '../styles/colors'

const CreateActivity = ({ openModal }) => {
	return (
		<View style={styles.activityContainer}>
			<View style={styles.activity}>
				<Ionicons
					name="md-add-outline"
					size={60}
					color={colors.primary}
					onPress={openModal}
				/>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	activity: {
		alignItems: 'center',
		borderColor: colors.secondary,
		borderRadius: 10,
		borderWidth: 1,
		display: 'flex',
		height: 100,
		justifyContent: 'center',
		margin: 10,
		textAlign: 'center',
		width: 100,
	},
	activityContainer: {
		alignItems: 'center',
		display: 'flex',
		justifyContent: 'center',
		width: '33%',
	},
})

export default CreateActivity
