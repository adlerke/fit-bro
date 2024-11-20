import React from 'react';

import { Container, Title, LeftContainer, RigthContainer } from './styles';
import Feather from 'react-native-vector-icons/Feather';
import { useTheme } from 'styled-components';
import UserAvatar from '../UserAvatar';

type ItemButtonProps = {
	title: string;
	iconLeft?: string;
	iconRight?: string;
	/**
	 * can be used to text color and icon colors as well
	 */
	textColor?: string;
	/**
	 * defaults true to have a bottom border on the component
	 */
	hasBottomBorder?: boolean;
	avatarUrl?: string;
};

const ItemButton: React.FC<ItemButtonProps> = ({
	title,
	textColor,
	iconLeft,
	iconRight,
	hasBottomBorder = true,
	avatarUrl,
}) => {
	const theme = useTheme();
	return (
		<Container hasBottomBorder={hasBottomBorder}>
			<LeftContainer>
				{!!iconLeft && (
					<Feather
						style={{
							marginRight: 12,
						}}
						name={iconLeft}
						color={textColor ?? theme.colors.secondaryText}
						size={18}
					/>
				)}
				<Title color={textColor}>{title}</Title>
			</LeftContainer>
			<RigthContainer>
				{!!iconRight && (
					<Feather
						name={iconRight}
						color={textColor ?? theme.colors.secondaryText}
						size={18}
					/>
				)}
			</RigthContainer>
		</Container>
	);
};

export default ItemButton;
