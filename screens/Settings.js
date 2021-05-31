import React from 'react'
import { StyleSheet, SafeAreaView, Text } from 'react-native'
import BackButton from '../components/BackButton'
import { heading } from '../styles/typography'

const Settings = ({ navigation }) => {
	return (
		<SafeAreaView>
			<BackButton onPress={() => navigation.navigate('Home')} />
			<Text style={styles.heading}>Settings</Text>
		</SafeAreaView>
	)
}

const styles = {
	heading: {
		...heading,
		textAlign: 'center',
	},
}

export default Settings
