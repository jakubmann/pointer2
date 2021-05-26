import React from 'react'
import { SafeAreaView, StyleSheet, View } from 'react-native'
import { useSelector } from 'react-redux'
import Activity from '../components/Activity'

const styles = StyleSheet.create({
	text: {},
})

const Home = () => {
	const activities = useSelector((state) => state.activity.activities)
	return (
		<SafeAreaView>
			<View style={styles.activities}>
				{activities.map((a) => {
					return (
						<Activity
							key={a.id}
							name={a.name}
							points={a.points}
							type={a.type}
						/>
					)
				})}
			</View>
		</SafeAreaView>
	)
}

export default Home
