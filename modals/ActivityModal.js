import React from 'react'
import { Modal, View, Text, TextInput, StyleSheet } from 'react-native'
import { BlurView } from 'expo-blur'
import { Ionicons } from '@expo/vector-icons'

import colors from '../styles/colors'

const ActivityModal = ({ modalOpen, closeModal }) => {
	return (
		<Modal
			animationType="slide"
			transparent={true}
			visible={modalOpen}
			onRequestClose={() => {
				console.log('Modal Close')
			}}
		>
			<View style={styles.centered}>
				<BlurView style={styles.modal} intensity={90} tint={'light'}>
					<Ionicons
						name="md-close-outline"
						size={20}
						color="black"
						onPress={closeModal}
					/>
					<Text>TYPICO COZE</Text>
				</BlurView>
			</View>
		</Modal>
	)
}

const styles = StyleSheet.create({
	centered: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	modal: {
		margin: 20,
		backgroundColor: colors.background,
		borderRadius: 20,
		overflow: 'hidden',
		width: '80%',
		padding: 35,
		shadowColor: '#000',
		shadowOffset: {
			width: 2,
			height: 5,
		},
		shadowOpacity: 0.15,
		shadowRadius: 4,
		elevation: 2,
	},
})

export default ActivityModal
