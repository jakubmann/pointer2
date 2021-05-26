import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet } from 'react-native'
import { View, Text } from 'react-native'

const styles = StyleSheet.create({
	activity: {},
	add: {},
	remove: {},
})

const Activity = ({ name, points, type }) => {
	return (
		<View
			style={[
				styles.activity,
				type === 'add' ? styles.add : styles.subtract,
			]}
		>
			<Text style={styles.activityName}>{name}</Text>
			<Text style={styles.activityPoints}>{points}</Text>
		</View>
	)
}

Activity.propTypes = {
	name: PropTypes.string,
	points: PropTypes.int,
	type: PropTypes.string,
}

export default Activity
