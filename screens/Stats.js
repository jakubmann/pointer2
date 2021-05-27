import React from 'react'
import { StyleSheet, SafeAreaView, Text } from 'react-native'
import BackButton from '../components/BackButton'
import { heading } from '../styles/typography'

const Stats = ({ navigation }) => {
	return (
		<SafeAreaView style={styles.container}>
			<BackButton onPress={() => navigation.navigate('Home')} />
			<Text style={styles.heading}>Stats</Text>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {},
	heading: {
		...heading,
		textAlign: 'center',
	},
})

export default Stats
