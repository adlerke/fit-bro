import React from 'react';
import PressableAvatar from './Pressable';
import ReadOnlyAvatar from './ReadOnly';

export type UserAvatarType = {
	name?: string;
	avatarUrl: string;
	onPress?: () => void;
	size?: number;
	isPressable?: boolean;
};
const UserAvatar: React.FC<UserAvatarType> = props => {
	if (props?.isPressable) {
		return <PressableAvatar {...props} />;
	}
	return <ReadOnlyAvatar {...props} />;
};

export default UserAvatar;
