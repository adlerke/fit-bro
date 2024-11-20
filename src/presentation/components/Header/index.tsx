import React from 'react';

import { Container, IconContainer, Title } from './styles';
import Feather from 'react-native-vector-icons/Feather';
import { useTheme } from 'styled-components';
import { useNavigation } from '@react-navigation/native';

type HeaderPropsType = {
	title: string;
};

const Header: React.FC<HeaderPropsType> = ({ title }) => {
	const theme = useTheme();
	const navigation = useNavigation();

	const navigateBack = () => {
		navigation.goBack();
	};

	return (
		<Container>
			<IconContainer onPress={navigateBack}>
				<Feather name="chevron-left" size={22} color={theme.colors.text} />
			</IconContainer>

			<Title>{title}</Title>
		</Container>
	);
};

export default Header;
