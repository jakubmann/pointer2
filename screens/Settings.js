import React from 'react'
import { StyleSheet, SafeAreaView, Text } from 'react-native'
import BackButton from '../components/BackButton'

const Settings = ({ navigation }) => {
	return (
		<SafeAreaView>
			<BackButton onPress={() => navigation.navigate('Home')} />
		</SafeAreaView>
	)
}

export default Settings
