//Library imports
import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet } from 'react-native'
import { View, Text, TouchableOpacity } from 'react-native'
import { useDispatch } from 'react-redux'

//Reducer imports


//Styles imports
import { centered } from '../styles/common'

import { bold, light } from '../styles/typography'

import colors from '../styles/colors'


const Activity = ({ id, name, points, type }) => {
	const dispatch = useDispatch()

	return (
		<TouchableOpacity
			style={styles.activityContainer}
			onPress={() => dispatch(performActivity(id))}
		>
			<View
				style={[
					styles.activity,
					type === 'add' ? styles.add : styles.remove,
				]}
			>
				<Text style={styles.activityName}>{name}</Text>
				<Text style={styles.activityPoints}>{points}</Text>
			</View>
		</TouchableOpacity>
	)
}

Activity.propTypes = {
	id: PropTypes.string,
	name: PropTypes.string,
	points: PropTypes.number,
	type: PropTypes.string,
}

const styles = StyleSheet.create({
	activity: {
		...centered,
		borderRadius: 10,
		display: 'flex',
		height: 100,
		margin: 10,
		width: 100,
	},
	activityContainer: {
		alignItems: 'center',
		display: 'flex',
		justifyContent: 'center',
		width: '33%',
	},
	activityName: {
		...light,
		fontSize: 16,
		padding: 4,
	},
	activityPoints: {
		...bold,
		fontSize: 15,
	},
	add: {
		backgroundColor: colors.green,
	},
	remove: {
		backgroundColor: colors.red,
	},
})

export default Activity
