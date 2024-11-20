import React from 'react';

import {
	Container,
	UserInfoContainer,
	UserName,
	UserInfoText,
	LevelTextInfoLink,
	ProfileLevelStatus,
	LevelText,
	ProfileLevel,
	ProfileLevelHighlight,
	LevelTextHighlight,
	LevelTextInfo,
} from './styles';
import Header from '../components/Header';
import UserAvatar from '../components/UserAvatar';
import { View } from 'react-native';
import { useTheme } from 'styled-components';
import ItemButton from '../components/ItemButton';

const MyAccountScreen: React.FC = () => {
	const theme = useTheme();
	return (
		<>
			<Header title="Perfil" />
			<Container>
				<UserInfoContainer>
					<UserAvatar
						size={114}
						avatarUrl="https://avatars.githubusercontent.com/u/22044445?v=4"
					/>

					<UserName>Adler Kesley</UserName>
				</UserInfoContainer>
				<ProfileLevelStatus
					style={{
						shadowColor: theme.colors.neutral950,
						shadowOffset: {
							width: 0,
							height: 6,
						},
						shadowOpacity: 0.39,
						shadowRadius: 8.3,

						elevation: 8,
					}}>
					<LevelText>
						Nível do perfil: <LevelTextHighlight>Verificado</LevelTextHighlight>
					</LevelText>
					<LevelTextInfo>
						Não é verificado ainda?{' '}
						<LevelTextInfoLink>Saiba o que fazer</LevelTextInfoLink>
					</LevelTextInfo>
					<ProfileLevel style={{ position: 'absolute', bottom: 20 }} />
					<ProfileLevelHighlight
						style={{
							position: 'absolute',
							bottom: 20,
							justifyContent: 'center',
						}}></ProfileLevelHighlight>
				</ProfileLevelStatus>
				<View
					style={{
						backgroundColor: theme.colors.boxBackground,
						borderRadius: 8,
						marginTop: 24,
						paddingHorizontal: 8,
					}}>
					<ItemButton
						title="Editar perfil"
						iconLeft="edit"
						iconRight="chevron-right"
					/>
					{/* <ItemButton
						title="Favoritos"
						iconLeft="heart"
						iconRight="chevron-right"
					/> */}
					<ItemButton title="Sobre" iconLeft="info" iconRight="chevron-right" />
					<ItemButton
						title="Ajuda"
						iconLeft="help-circle"
						iconRight="chevron-right"
						hasBottomBorder={false}
					/>
				</View>

				<View
					style={{
						backgroundColor: theme.colors.boxBackground,
						borderRadius: 8,
						marginTop: 24,
						paddingHorizontal: 8,
					}}>
					<ItemButton
						title="Sair"
						iconLeft="log-out"
						textColor={theme.colors.redA200}
						hasBottomBorder={false}
					/>
				</View>
			</Container>
		</>
	);
};

export default MyAccountScreen;
