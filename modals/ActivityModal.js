//Library imports
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Modal, View, Text, TextInput, StyleSheet, Button } from 'react-native'
import { BlurView } from 'expo-blur'
import { Ionicons } from '@expo/vector-icons'
import SwitchSelector from 'react-native-switch-selector'

//Component imports
import AppButton from '../components/AppButton'

//Style imports
import {
	modalContainer,
	inputLabel,
	textInput,
	modal,
	modalClose,
	inputError,
} from '../styles/common'

import colors from '../styles/colors'

import { text } from '../styles/typography'

//Reducer imports
import {
	setActivityModalInput,
	clearActivityModalInput,
} from '../slices/inputSlice'

import {
	setActivityModalError,
	clearActivityModalError,
	addErrorMessage,
	clearErrorMessage,
} from '../slices/errorSlice'
import { addActivity } from '../slices/activitySlice'

const ActivityModal = ({ modalOpen, closeModal }) => {
	const dispatch = useDispatch()
	const inputData = useSelector((state) => state.input.activityModal)
	const errorMessages = useSelector((state) => state.error.messages)
	const error = useSelector((state) => state.error.activityModal)

	useEffect(() => {
		console.log(inputData)
	}, [inputData])

	useEffect(() => {
		console.log(errorMessages)
	}, [errorMessages])

	//Clear errors when closing modal
	const close = () => {
		dispatch(clearActivityModalError())
		dispatch(clearActivityModalInput())
		closeModal()
	}

	const onSubmit = () => {
		dispatch(clearErrorMessage())
		if (validateForm()) {
			console.log('submitted')
			dispatch(addActivity(inputData))
			close()
		}
	}

	const validateForm = () => {
		let valid = true
		//Name length validation
		if (inputData.name.length === 0) {
			dispatch(setActivityModalError({ nameError: true }))
			dispatch(addErrorMessage('Please enter activity name'))
			valid = false
		}
		//Points length validation
		if (inputData.points.length === 0) {
			dispatch(setActivityModalError({ pointsError: true }))
			dispatch(
				addErrorMessage(
					'Please enter the amount of points this activity ' +
						inputData.type +
						's'
				)
			)
			valid = false
		} 
		//Points value data type validation	
		else if ((!Number.isInteger(inputData.points))) {
			dispatch(setActivityModalError({ pointsError: true }))
			dispatch(addErrorMessage('Points must be an integer'))
			valid = false
		}

		return valid
	}

	return (
		<Modal
			animationType="slide"
			transparent={true}
			visible={modalOpen}
		>
			<View style={modalContainer}>
				<BlurView style={styles.modal} intensity={90} tint={'light'}>
					<Ionicons
						style={styles.closeButton}
						name="md-close-outline"
						size={25}
						color="black"
						onPress={close}
					/>
					{errorMessages.length > 0 && (
						<View style={styles.errorContainer}>
							{errorMessages.map((message) => {
								return (
									<Text
										style={styles.errorMessage}
										key={message}
									>
										{message}
									</Text>
								)
							})}
						</View>
					)}
					<View style={styles.inputGroup}>
						<Text style={styles.label}>Name</Text>
						<TextInput
							value={inputData.name}
							style={[
								styles.nameInput,
								error.nameError ? inputError : null,
							]}
							onChangeText={(name) => {
								dispatch(setActivityModalInput({ name }))
								dispatch(
									setActivityModalError({ nameError: false })
								)
							}}
						/>
					</View>
					<View style={styles.inputGroup}>
						<Text style={styles.label}>Points</Text>
						<TextInput
							style={[
								styles.pointsInput,
								error.pointsError ? inputError : null,
							]}
							numeric
							keyboardType="number-pad"
							returnKeyType="done"
							onChangeText={(points) => {
								dispatch(setActivityModalInput({ points: Number(points) }))
								dispatch(
									setActivityModalError({
										pointsError: false,
									})
								)
							}}
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
	buttonContainer: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
	},
	closeButton: {
		...modalClose,
	},
	confirmButton: {
		marginTop: 20,
		width: '50%',
	},
	errorContainer: {
		display: 'flex',
		paddingBottom: 25,
		paddingTop: 10,
	},
	errorMessage: {
		...text,
		color: colors.red,
		paddingTop: 10,
	},
	inputGroup: {
		alignItems: 'center',
		display: 'flex',
		flexDirection: 'row',
		margin: 3,
		padding: 3,
	},
	label: {
		...inputLabel,
		flex: 1,
	},
	modal: {
		...modal,
		display: 'flex',
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
})

export default ActivityModal