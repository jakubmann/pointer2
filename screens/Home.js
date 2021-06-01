import React, { useEffect, useState } from 'react'
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native'
import { useSelector } from 'react-redux'

import Activity from '../components/Activity'
import StatusBar from '../components/StatusBar'
import NavIcon from '../components/NavIcon'
import CreateActivity from '../components/CreateActivity'
import ActivityModal from '../modals/ActivityModal'

const Home = ({ navigation }) => {
	const activities = useSelector((state) => state.activity.activities)
	const [activityModalOpen, setActivityModalOpen] = useState(false)

	return (
		<SafeAreaView style={styles.container}>
			<ActivityModal
				modalOpen={activityModalOpen}
				closeModal={() => setActivityModalOpen(false)}
			/>
			<ScrollView>
				<View style={styles.activities}>
					{activities.map((a) => {
						return (
							<Activity
								key={a.id}
								id={a.id}
								name={a.name}
								points={a.points}
								type={a.type}
							/>
						)
					})}
					<CreateActivity
						openModal={() => setActivityModalOpen(true)}
					/>
				</View>
			</ScrollView>
			<View style={styles.toolbar}>
				<StatusBar style={styles.status} />
				<NavIcon
					style={styles.stats}
					name="md-stats-chart-outline"
					onPress={() => navigation.navigate('Stats')}
				/>
				<NavIcon
					style={styles.settings}
					name="md-cog-outline"
					onPress={() => navigation.navigate('Settings')}
				/>
			</View>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	activities: {
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
	},
	container: {
		flex: 1,
	},
	settings: {
		flex: 1,
	},
	stats: {
		flex: 1,
	},
	status: {
		flex: 1,
	},
	toolbar: {
		display: 'flex',
		flex: 0.2,
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
})

export default Home
