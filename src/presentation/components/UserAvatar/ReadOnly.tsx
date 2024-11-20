import React from 'react';
import { Image } from 'react-native';
import { ContainerReadOnly, ImageContainer, UserNameText } from './styles';
import { UserAvatarType } from '.';

const ReadOnlyAvatar: React.FC<UserAvatarType> = ({
	name,
	avatarUrl,
	size = 64,
}) => {
	return (
		<ContainerReadOnly>
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
		</ContainerReadOnly>
	);
};

export default ReadOnlyAvatar;
