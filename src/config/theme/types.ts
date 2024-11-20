import { StatusBarStyle } from 'react-native';
import { ColorType } from './colors';

export type Colors = {
	[key in ColorType]: string;
};

export type ThemeColors = Colors & {
	statusBar: StatusBarStyle;
	primary: string;
	secondary: string;
	border: string;
	background: string;
	text: string;
	secondaryText: string;
	tabBarColor: string;
	boxBackground: string;
	boxShadow: string;
	iconColor: string;
};

export type ThemeType = {
	colors: ThemeColors;
};

export type ThemeProps = {
	theme: ThemeType;
};
