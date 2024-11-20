import React from 'react';
import { Image } from 'react-native';
import { ContainerPressable, ImageContainer, UserNameText } from './styles';
import { UserAvatarType } from '.';

const PressableAvatar: React.FC<UserAvatarType> = ({
	name,
	avatarUrl,
	onPress,
	size = 64,
}) => {
	const buttonOpacity = onPress ? 0.7 : 1;

	return (
		<ContainerPressable onPress={onPress} activeOpacity={buttonOpacity}>
			<Image
				resizeMode="cover"
				width={size}
				height={size}
				borderRadius={size / 2}
				source={{
					uri: avatarUrl,
				}}
			/>

			{!!name && <UserNameText>{name}</UserNameText>}
		</ContainerPressable>
	);
};

export default PressableAvatar;
