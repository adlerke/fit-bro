import React from 'react';

import {
	createStackNavigator,
	TransitionPresets,
} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import { useTheme } from '~/config/theme';
import WelcomeScreen from '~/presentation/WelcomeScreen';
import HomeScreen from '~/presentation/HomeScreen';
import SearchScreen from '~/presentation/SearchScreen';
import MyAccountScreen from '~/presentation/MyAccountScreen';
import InvitesScreen from '~/presentation/InvitesScreen';
import SignInScreen from '~/presentation/SignInScreen';
import SignUpScreen from '~/presentation/SignUpScreen';
import InviteFormScreen from '~/presentation/InviteFormScreen';

const RootNavigations = createStackNavigator();
const navigations = [
	{
		name: 'HomeScreen',
		component: HomeScreen,
		options: {
			headerShown: false,
		},
	},
	{
		name: 'SearchScreen',
		component: SearchScreen,
		options: {
			headerShown: false,
		},
	},
	{
		name: 'MyAccountScreen',
		component: MyAccountScreen,
		options: {
			headerShown: false,
		},
	},
	{
		name: 'WelcomeScreen',
		component: WelcomeScreen,
		options: {
			headerShown: false,
		},
	},
	{
		name: 'InvitesScreen',
		component: InvitesScreen,
		options: {
			headerShown: false,
		},
	},
	{
		name: 'SignInScreen',
		component: SignInScreen,
		options: {
			headerShown: false,
		},
	},
	{
		name: 'SignUpScreen',
		component: SignUpScreen,
		options: {
			headerShown: false,
		},
	},
	{
		name: 'InviteFormScreen',
		component: InviteFormScreen,
		options: {
			headerShown: false,
		},
	},
];

const AppNavigation = () => {
	const theme = useTheme();
	return (
		<NavigationContainer>
			<RootNavigations.Navigator
				initialRouteName="WelcomeScreen"
				screenOptions={{
					presentation: 'transparentModal',
					cardStyle: {
						backgroundColor: theme.colors.background,
					},
					...TransitionPresets.SlideFromRightIOS,
				}}>
				{navigations.map(navigation => {
					return (
						<RootNavigations.Screen
							key={navigation.name}
							name={navigation.name}
							component={navigation.component}
							options={navigation.options}
						/>
					);
				})}
			</RootNavigations.Navigator>
		</NavigationContainer>
	);
};
export default AppNavigation;
