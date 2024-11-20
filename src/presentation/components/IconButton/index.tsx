import React from 'react';

import { Container } from './styles';
import { useTheme } from 'styled-components';
import Feather from 'react-native-vector-icons/Feather';

type IconButtonType = {
	icon: string;
	onPress: () => void;
	top?: number;
};

const IconButton: React.FC<IconButtonType> = ({ icon, onPress, top = 64 }) => {
	const theme = useTheme();
	return (
		<Container
			top={top}
			onPress={onPress}
			activeOpacity={0.8}
			style={{
				shadowColor: theme.colors.neutral950,
				shadowOffset: {
					width: 0,
					height: 6,
				},
				shadowOpacity: 0.39,
				shadowRadius: 8.3,

				elevation: 13,
			}}>
			<Feather name={icon} size={22} color={theme.colors.text} />
		</Container>
	);
};

export default IconButton;
