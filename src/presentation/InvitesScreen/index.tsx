import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { Container } from './styles';
import Header from '../components/Header';
import ItemButton from '../components/ItemButton';
import UserAvatar from '../components/UserAvatar';
import Feather from 'react-native-vector-icons/Feather';
import { useTheme } from 'styled-components';

const InvitesScreen: React.FC = () => {
	const theme = useTheme();
	return (
		<>
			<Header title="Convites" />
			<Container>
				<TouchableOpacity
					style={{
						width: '100%',
						backgroundColor: theme.colors.boxBackground,
						paddingVertical: 12,
						borderRadius: 12,
						flexDirection: 'row',
						justifyContent: 'space-between',
						alignItems: 'center',
						marginTop: 8,
						borderLeftWidth: 4,
						borderLeftColor: theme.colors.secondary,
					}}>
					<View
						style={{
							flexDirection: 'row',
							alignItems: 'center',
						}}>
						<View>
							<UserAvatar avatarUrl="https://avatars.githubusercontent.com/u/22044445?v=4" />
						</View>
						<View style={{ marginLeft: 8 }}>
							<Text style={{ fontSize: 16, color: theme.colors.text }}>
								Adler Kesley
							</Text>
							<Text style={{ fontSize: 12, color: theme.colors.secondaryText }}>
								Starfitness Academia
							</Text>
							<View
								style={{
									alignItems: 'center',
									width: '70%',
									borderRadius: 99,
									marginTop: 4,
									backgroundColor: theme.colors.secondary,
								}}>
								<Text
									numberOfLines={1}
									style={{
										fontSize: 12,
										color: theme.colors.text,
									}}>
									Recebido
								</Text>
							</View>
						</View>
					</View>
					<View style={{ paddingRight: 16 }}>
						<Feather name="chevron-right" color={theme.colors.text} size={22} />
					</View>
				</TouchableOpacity>
				<TouchableOpacity
					style={{
						width: '100%',
						backgroundColor: theme.colors.boxBackground,
						paddingVertical: 12,
						borderRadius: 12,
						flexDirection: 'row',
						justifyContent: 'space-between',
						alignItems: 'center',
						marginTop: 8,
						borderLeftWidth: 4,
						borderLeftColor: theme.colors.blueGray700,
					}}>
					<View
						style={{
							flexDirection: 'row',
							alignItems: 'center',
						}}>
						<View>
							<UserAvatar avatarUrl="https://avatars.githubusercontent.com/u/22044445?v=4" />
						</View>
						<View style={{ marginLeft: 8 }}>
							<Text style={{ fontSize: 16, color: theme.colors.text }}>
								Adler Kesley
							</Text>
							<Text style={{ fontSize: 12, color: theme.colors.secondaryText }}>
								Starfitness Academia
							</Text>
							<View
								style={{
									alignItems: 'center',
									width: '70%',
									borderRadius: 99,
									marginTop: 4,
									backgroundColor: theme.colors.blueGray700,
								}}>
								<Text
									numberOfLines={1}
									style={{
										fontSize: 12,
										color: theme.colors.text,
									}}>
									Enviado
								</Text>
							</View>
						</View>
					</View>
					<View style={{ paddingRight: 16 }}>
						<Feather name="chevron-right" color={theme.colors.text} size={22} />
					</View>
				</TouchableOpacity>
				<TouchableOpacity
					style={{
						width: '100%',
						backgroundColor: theme.colors.boxBackground,
						paddingVertical: 12,
						borderRadius: 12,
						flexDirection: 'row',
						justifyContent: 'space-between',
						alignItems: 'center',
						marginTop: 8,
						borderLeftWidth: 4,
						borderLeftColor: theme.colors.redA700,
					}}>
					<View
						style={{
							flexDirection: 'row',
							alignItems: 'center',
						}}>
						<View>
							<UserAvatar avatarUrl="https://avatars.githubusercontent.com/u/22044445?v=4" />
						</View>
						<View style={{ marginLeft: 8 }}>
							<Text style={{ fontSize: 16, color: theme.colors.text }}>
								Adler Kesley
							</Text>
							<Text style={{ fontSize: 12, color: theme.colors.secondaryText }}>
								Starfitness Academia
							</Text>
							<View
								style={{
									alignItems: 'center',
									width: '70%',
									borderRadius: 99,
									marginTop: 4,
									backgroundColor: theme.colors.redA700,
								}}>
								<Text
									numberOfLines={1}
									style={{
										fontSize: 12,
										color: theme.colors.text,
									}}>
									Rejeitado
								</Text>
							</View>
						</View>
					</View>
					<View style={{ paddingRight: 16 }}>
						<Feather name="chevron-right" color={theme.colors.text} size={22} />
					</View>
				</TouchableOpacity>
			</Container>
		</>
	);
};

export default InvitesScreen;
