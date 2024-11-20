import React, { useRef } from 'react';

import {
	Container,
	Title,
	MembersCountText,
	ViewMembersButtonText,
	ViewMembersButton,
	Modal,
	GymTitle,
	ModalTitle,
} from './styles';
import { useTheme } from 'styled-components';
import { View, StyleSheet, Text } from 'react-native';
import { Modalize } from 'react-native-modalize';
type GymInfoType = {
	gymId: number | string;
	gymName: string;
	membersCount: number;
};
import { ScrollView } from 'react-native-gesture-handler';
import UserAvatar from '../UserAvatar';
import Feather from 'react-native-vector-icons/Feather';
import { BlurView } from '@react-native-community/blur';
import { useNavigation } from '@react-navigation/native';

const GymInfo: React.FC<GymInfoType> = ({ gymId, gymName, membersCount }) => {
	const modalizeRef = useRef<Modalize>(null);
	const navigation = useNavigation();
	const theme = useTheme();
	const onOpen = () => {
		modalizeRef.current?.open();
	};
	return (
		<>
			<Container
				onPress={onOpen}
				style={{
					// ideia de empty state, ilustracao > selecione sua academia e ache o seu FitBro
					// caso nao ache, você pode nos sugerir uma academia clicando aqui.

					//ideia de proposta, dia string,
					// grupo muscular que vai treinar,
					// e seus detalhes para contato.
					//verificar se e membro ou nao para aparecer ou nao botao de fazer parte

					shadowColor: theme.colors.neutral950,
					shadowOffset: {
						width: 0,
						height: 6,
					},
					shadowOpacity: 0.39,
					shadowRadius: 8.3,

					elevation: 6,
					paddingHorizontal: 18,
					// alignItems: 'center',
					justifyContent: 'space-between',
					paddingVertical: 18,
				}}>
				<View
					style={{
						flexDirection: 'row',
						justifyContent: 'space-between',
						alignItems: 'center',
					}}>
					<View key={gymId}>
						<Title>{gymName}</Title>
						<MembersCountText>{membersCount} membros</MembersCountText>
					</View>
					<Feather
						name="chevron-right"
						size={36}
						color={theme.colors.secondaryText}
					/>
				</View>
			</Container>
			<Modal ref={modalizeRef}>
				<View style={{ paddingTop: 12, paddingHorizontal: 16 }}>
					<View
						style={{
							flexDirection: 'row',
							alignItems: 'center',
							paddingBottom: 4,
						}}>
						<UserAvatar
							onPress={() => {}}
							avatarUrl="data:image/jpeg;base64,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"
						/>
						<GymTitle>{gymName}</GymTitle>
					</View>
					<MembersCountText>{membersCount} membros</MembersCountText>
					<MembersCountText>Rua antonio fernandes reis, 271</MembersCountText>
					<ViewMembersButton onPress={onOpen}>
						<ViewMembersButtonText>
							Sou membro da {gymName}
						</ViewMembersButtonText>
					</ViewMembersButton>
				</View>
				<ModalTitle>Membros</ModalTitle>

				<ScrollView
					showsHorizontalScrollIndicator={false}
					horizontal
					contentContainerStyle={{
						marginTop: 12,
						paddingHorizontal: 16,
						paddingBottom: 26,
					}}>
					<UserAvatar
						onPress={() => navigation.navigate('InviteFormScreen')}
						isPressable
						name="Adler"
						avatarUrl="https://avatars.githubusercontent.com/u/22044445?v=4"
					/>
				</ScrollView>
			</Modal>
		</>
	);
};
const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		alignItems: 'center',
	},
	absolute: {
		position: 'absolute',
		top: 0,
		left: 0,
		bottom: 0,
		right: 0,
	},
});
export default GymInfo;
