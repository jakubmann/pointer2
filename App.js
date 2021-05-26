import React from 'react'
import { Provider as ReduxProvider } from 'react-redux'
import { Provider as PaperProvider } from 'react-native-paper'
import { StatusBar } from 'expo-status-bar'
import { DefaultTheme, NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import store from './store'

import Home from './screens/Home'
import Stats from './screens/Stats'

const navigationTheme = {
	...DefaultTheme,
	colors: {
		...DefaultTheme.colors,
	},
}

const Stack = createStackNavigator()

export default function App() {
	return (
		<ReduxProvider store={store}>
			<PaperProvider>
				<NavigationContainer style={navigationTheme}>
					<Stack.Navigator
						screenOptions={{ headerShown: false }}
						initialRouteName="Home"
					>
						<Stack.Screen name="Home" component={Home} />
						<Stack.Screen name="Stats" component={Stats} />
					</Stack.Navigator>
				</NavigationContainer>
				<StatusBar style="auto" />
			</PaperProvider>
		</ReduxProvider>
	)
}
