import React, { useEffect, useState } from 'react';
import { View, Dimensions, PermissionsAndroid } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { mapStyle } from './mapStyle';

import IconButton from '../components/IconButton';
import MapMarker from '../components/MapMarker';
import GymInfo from '../components/GymInfo';
import { useNavigation } from '@react-navigation/native';
import Geolocation, { GeoPosition } from 'react-native-geolocation-service';

const { height, width } = Dimensions.get('screen');
const WelcomeScreen: React.FC = () => {
	const [location, setLocation] = useState<GeoPosition>();
	const [gymName, setGymName] = useState('');
	const navigation = useNavigation();

	const requestLocationPermission = async () => {
		try {
			const granted = await PermissionsAndroid.request(
				PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
				{
					title: 'Geolocation Permission',
					message: 'Can we access your location?',
					buttonNeutral: 'Ask Me Later',
					buttonNegative: 'Cancel',
					buttonPositive: 'OK',
				},
			);
			console.log('granted', granted);
			if (granted === 'granted') {
				console.log('You can use Geolocation');
				return true;
			} else {
				console.log('You cannot use Geolocation');
				return false;
			}
		} catch (err) {
			return false;
		}
	};
	const getLocation = () => {
		const result = requestLocationPermission();
		result.then(res => {
			console.log('res is:', res);
			if (res) {
				Geolocation.getCurrentPosition(
					position => {
						console.log(position);
						setLocation(position);
					},
					error => {
						// See error code charts below.
						console.log(error.code, error.message);
						setLocation(undefined);
					},
					{ enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 },
				);
			}
		});
		console.log(location);
	};
	useEffect(() => {
		getLocation();
	}, []);
	console.log({
		latitude: location?.coords.latitude ?? -11.2687,
		longitude: location?.coords.longitude ?? -37.4421,
		latitudeDelta: 0.0922,
		longitudeDelta: 0.0421,
	});
	return (
		<View>
			<IconButton
				icon="user"
				onPress={() => navigation.navigate('SignInScreen')}
			/>
			<IconButton
				icon="list"
				top={128}
				onPress={() => navigation.navigate('InvitesScreen')}
			/>
			{/* <IconButton
				icon="search"
				top={192}
				onPress={() => navigation.navigate('SearchScreen')}
			/> */}
			<MapView
				provider={PROVIDER_GOOGLE}
				style={{ height, width }}
				customMapStyle={mapStyle}
				onPress={({ nativeEvent }) => console.log(nativeEvent.coordinate)}
				initialRegion={{
					latitude: location?.coords.latitude ?? -11.2687,
					longitude: location?.coords.longitude ?? -37.4421,
					latitudeDelta: 0.0922,
					longitudeDelta: 0.0421,
				}}
				zoomEnabled
				// onMarkerPress={() => console.log()}
				showsScale={false}
				showsCompass={false}
				minZoomLevel={15}
				toolbarEnabled={false}
				maxZoomLevel={18}>
				<Marker
					onPress={() => {
						setGymName('StarFitness');
					}}
					coordinate={{ latitude: -11.2687, longitude: -37.4421 }}>
					<MapMarker />
				</Marker>
				<Marker
					onPress={() => {
						setGymName('Fitclub Centro');
					}}
					coordinate={{ latitude: -11.266721, longitude: -37.439121 }}>
					<MapMarker />
				</Marker>
			</MapView>
			{gymName && <GymInfo gymId={92} gymName={gymName} membersCount={321} />}
		</View>
	);
};
export default WelcomeScreen;
