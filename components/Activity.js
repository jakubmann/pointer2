import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet } from 'react-native'
import { View, Text } from 'react-native'

import { bold, light } from '../styles/typography'
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
	},
	add: {
		backgroundColor: colors.green,
	},
	remove: {
		backgroundColor: colors.red,
	},
	activityName: {
		...light,
		fontSize: 16,
	},
	activityPoints: {
		...bold,
		fontSize: 15,
	},
})

const Activity = ({ name, points, type }) => {
	return (
		<View style={styles.activityContainer}>
			<View
				style={[
					styles.activity,
					type === 'add' ? styles.add : styles.remove,
				]}
			>
				<Text style={styles.activityName}>{name}</Text>
				<Text style={styles.activityPoints}>{points}</Text>
			</View>
		</View>
	)
}

Activity.propTypes = {
	name: PropTypes.string,
	points: PropTypes.number,
	type: PropTypes.string,
}

export default Activity
