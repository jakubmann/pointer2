import colors from './colors'
import { bold, light, text } from './typography'

export const centered = {
	flex: 1,
	justifyContent: 'center',
	alignItems: 'center',
}

export const textInput = {
	...light,
	padding: 10,
	fontSize: 15,
	borderWidth: 0.3,
	borderRadius: 20,
	paddingLeft: 15,
	textAlign: 'left',
	borderColor: colors.black,
	color: colors.black,
}

export const inputLabel = {
	...bold,
	fontSize: 15,
	color: colors.primary,
}

export const inputError = {
	borderColor: colors.red,
}

export const modal = {
	margin: 20,
	backgroundColor: colors.background,
	borderRadius: 20,
	overflow: 'hidden',
	width: '90%',
	padding: 20,
	paddingTop: 30,

	/*
	 */
}

export const modalContainer = {
	...centered,
	shadowColor: colors.black,
	shadowOffset: {
		width: 5,
		height: 10,
	},
	shadowOpacity: 0.05,
	shadowRadius: 10,
	elevation: 10,
}

export const modalClose = {
	position: 'absolute',
	top: 10,
	right: 10,
}

export const button = {
	backgroundColor: colors.secondary,
	borderRadius: 20,
}

export const buttonText = {
	...text,
	color: colors.primary,
	fontSize: 15,
	textAlign: 'center',
	paddingTop: 10,
	paddingBottom: 10,
	paddingLeft: 15,
	paddingRight: 15,
}
