import React from 'react';

import {
	Container,
	InfoContainer,
	InfoText,
	Body,
	InfoTextTitle,
} from './styles';
import Header from '../components/Header';
import FormInput from '../components/FormInput';
import { useTheme } from 'styled-components';
import Feather from 'react-native-vector-icons/Feather';

const InviteFormScreen: React.FC = () => {
	const theme = useTheme();
	return (
		<>
			<Header title="Convite" />
			<Container>
				<InfoContainer>
					<Feather name="info" color={theme.colors.brown200} size={32} />
					<Body>
						<InfoTextTitle>
							Convide seu amigo para treinar com você!
						</InfoTextTitle>
						<InfoText>
							Escolha o tipo de treino e selecione a data para enviar o convite.
							{'\n'}#FitBro
						</InfoText>
					</Body>
				</InfoContainer>
				<FormInput name="adlerzao" label="Supino" />
			</Container>
		</>
	);
};

export default InviteFormScreen;
