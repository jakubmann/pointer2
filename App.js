import React from 'react'
import { Provider as ReduxProvider } from 'react-redux'
import AppLoading from 'expo-app-loading'
import { StatusBar } from 'expo-status-bar'
import { DefaultTheme, NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { useFonts } from 'expo-font'
import {
	RobotoMono_100Thin,
	RobotoMono_100Thin_Italic,
	RobotoMono_300Light,
	RobotoMono_300Light_Italic,
	RobotoMono_400Regular,
	RobotoMono_400Regular_Italic,
	RobotoMono_500Medium,
	RobotoMono_500Medium_Italic,
	RobotoMono_700Bold,
	RobotoMono_700Bold_Italic,
} from '@expo-google-fonts/roboto-mono'
import store from './store'

import Home from './screens/Home'
import Stats from './screens/Stats'
import Settings from './screens/Settings'
import colors from './styles/colors'

//Navigation screen color configuration
const navigationDarkTheme = {
	...DefaultTheme,
	colors: {
		...DefaultTheme.colors,
		background: colors.backgroundDark,
		card: colors.backgroundDark,
	},
}

//TODO: add switch dark and light mode
const navigationTheme = navigationDarkTheme

const Stack = createStackNavigator()

export default function App() {
	//Expo Google fonts hook
	const [loaded] = useFonts({
		RobotoMono_100Thin,
		RobotoMono_100Thin_Italic,
		RobotoMono_300Light,
		RobotoMono_300Light_Italic,
		RobotoMono_400Regular,
		RobotoMono_400Regular_Italic,
		RobotoMono_500Medium,
		RobotoMono_500Medium_Italic,
		RobotoMono_700Bold,
		RobotoMono_700Bold_Italic,
	})

	//Font loading check
	if (!loaded) {
		return <AppLoading />
	} else {
		return (
			<ReduxProvider store={store}>
				<NavigationContainer style={navigationTheme}>
					<Stack.Navigator
						screenOptions={{ headerShown: false }}
						initialRouteName="Home"
					>
						<Stack.Screen name="Home" component={Home} />
						<Stack.Screen name="Stats" component={Stats} />
						<Stack.Screen name="Settings" component={Settings} />
					</Stack.Navigator>
				</NavigationContainer>
				<StatusBar style="auto" />
			</ReduxProvider>
		)
	}
}
