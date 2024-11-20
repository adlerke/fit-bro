import colors from './colors';
import { ThemeType } from './types';

const DefaultTheme: ThemeType = {
	colors: {
		...colors,
		statusBar: 'light-content',
		primary: colors.deepOrange700,
		secondary: colors.teal500,
		border: colors.neutral800,
		background: colors.bgLight,
		text: colors.neutral100,
		secondaryText: colors.neutral500,
		tabBarColor: colors.neutral950,
		boxBackground: colors.neutral900,
		boxShadow: colors.neutral950,
		iconColor: colors.neutral100,
	},
};

export default DefaultTheme;
