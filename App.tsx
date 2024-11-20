import React from 'react';
import { StatusBar } from 'react-native';
import { Theme, themes } from './src/config/theme';
import AppNavigation from './src/routes';

const App: React.FC = () => {
	const theme = themes.default;

	return (
		<Theme theme={theme}>
			<StatusBar
				translucent
				barStyle={theme.colors.statusBar}
				backgroundColor={theme.colors.bgDark}
			/>
			<AppNavigation />
		</Theme>
	);
};

export default App;
