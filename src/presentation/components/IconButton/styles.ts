import styled from 'styled-components/native';
import { Dimensions, TouchableOpacity } from 'react-native';

const { width } = Dimensions.get('screen');
const BORDER_RADIUS_DEFAULT = width / 2;

type StyledProps = {
	top: number;
};

export const Container = styled.TouchableOpacity<StyledProps>`
	position: absolute;
	width: 54px;
	height: 54px;
	border-radius: ${BORDER_RADIUS_DEFAULT}px;
	background-color: ${({ theme }) => theme.colors.neutral900};
	top: ${({ top }) => top}px;
	right: 16px;
	z-index: 999;
	align-items: center;
	justify-content: center;
	padding: 0px 16px;
`;
