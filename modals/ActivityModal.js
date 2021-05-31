import React, { useState, useEffect } from 'react'
import { Modal, View, Text, TextInput, StyleSheet, Button } from 'react-native'
import { BlurView } from 'expo-blur'
import { Ionicons } from '@expo/vector-icons'
import SwitchSelector from 'react-native-switch-selector'

import {
	modalContainer,
	inputLabel,
	textInput,
	modal,
	modalClose,
	inputError,
} from '../styles/common'
import colors from '../styles/colors'
import AppButton from '../components/AppButton'

import {
	setActivityModalInput,
	clearActivityModalInput,
} from '../slices/inputSlice'
import {
	setActivityModalError,
	clearActivityModalError,
} from '../slices/errorSlice'

import { useDispatch, useSelector } from 'react-redux'

const ActivityModal = ({ modalOpen, closeModal }) => {
	const dispatch = useDispatch()
	const inputData = useSelector((state) => state.input.activityModal)
	const error = useSelector((state) => state.error.activityModal)

	useEffect(() => {
		console.log(inputData)
	}, [inputData])

	const onSubmit = () => {
		if (validateForm()) {
			console.log('submitted')
			dispatch(clearActivityModalError())
			dispatch(clearActivityModalInput())
			closeModal()
		}
	}

	const validateForm = () => {
		let valid = true
		if (inputData.name.length === 0) {
			dispatch(setActivityModalError({ titleLength: true }))
			valid = false
		}
		if (inputData.points.length === 0) {
			dispatch(setActivityModalError({ pointsLength: true }))
			valid = false
		}
		if (!parseInt(inputData.points)) {
			console.log(inputData.points)
			console.log('not int')
		}
		return valid
	}

	return (
		<Modal
			animationType="slide"
			transparent={true}
			visible={modalOpen}
			onRequestClose={() => {
				console.log('Modal Close')
			}}
		>
			<View style={modalContainer}>
				<BlurView style={styles.modal} intensity={90} tint={'light'}>
					<Ionicons
						style={styles.closeButton}
						name="md-close-outline"
						size={25}
						color="black"
						onPress={closeModal}
					/>
					<View style={styles.inputGroup}>
						<Text style={styles.label}>Name</Text>
						<TextInput
							value={inputData.name}
							style={[
								styles.nameInput,
								error.titleLength ? inputError : null,
							]}
							onChangeText={(name) => {
								dispatch(setActivityModalInput({ name }))
							}}
						/>
					</View>
					<View style={styles.inputGroup}>
						<Text style={styles.label}>Points</Text>
						<TextInput
							style={[
								styles.pointsInput,
								error.pointsLength ? inputError : null,
							]}
							numeric
							keyboardType="number-pad"
							returnKeyType="done"
							onChangeText={(points) =>
								dispatch(setActivityModalInput({ points }))
							}
						/>
					</View>
					<View style={styles.inputGroup}>
						<SwitchSelector
							initial={0}
							style={styles.typeSelector}
							buttonColor={colors.secondary}
							backgroundColor={colors.primary}
							textColor={colors.secondary}
							selectedColor={colors.primary}
							borderColor={colors.primary}
							options={[
								{ label: 'Add points', value: 'add' },
								{ label: 'Remove points', value: 'remove' },
							]}
							onPress={(type) =>
								dispatch(setActivityModalInput({ type }))
							}
						/>
					</View>
					<View style={styles.buttonContainer}>
						<AppButton
							style={styles.confirmButton}
							title="Save"
							onPress={onSubmit}
						/>
					</View>
				</BlurView>
			</View>
		</Modal>
	)
}

const styles = StyleSheet.create({
	inputGroup: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		margin: 3,
		padding: 3,
	},
	buttonContainer: {
		display: 'flex',
		justifyContent: 'center',
		flexDirection: 'row',
	},
	label: {
		...inputLabel,
		flex: 1,
	},
	nameInput: {
		...textInput,
		flex: 2,
	},
	pointsInput: {
		...textInput,
		flex: 2,
	},
	typeSelector: {
		flex: 1,
	},
	modal: {
		...modal,
		display: 'flex',
	},
	closeButton: {
		...modalClose,
	},
	confirmButton: {
		width: '50%',
		marginTop: 20,
	},
})

export default ActivityModal
