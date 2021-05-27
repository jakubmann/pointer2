import { Appearance } from 'react-native'

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
	fontSize: 15,
}

export const heading = {
	...bold,
	fontSize: 30,
}
