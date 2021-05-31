import { Appearance } from 'react-native'
import colors from './colors'

const colorScheme = Appearance.getColorScheme()

console.log(colorScheme)

export const regular = {
	fontFamily: 'RobotoMono_400Regular',
}

export const bold = {
	fontFamily: 'RobotoMono_700Bold',
}
export const light = {
	fontFamily: 'RobotoMono_300Light',
}

export const text = {
	...regular,
	color: colors.black,
	fontSize: 15,
}

export const heading = {
	...bold,
	color: colors.black,
	fontSize: 30,
	padding: 10,
}
