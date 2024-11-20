import styled from 'styled-components/native';

import { Dimensions } from 'react-native';
import { Modalize } from 'react-native-modalize';

const { width } = Dimensions.get('screen');

export const Container = styled.TouchableOpacity.attrs({
	activeOpacity: 0.6,
})`
	position: absolute;
	bottom: 50px;
	width: ${width - 32}px;
	left: 16px;
	background-color: ${({ theme }) => theme.colors.bgDark};
	border-radius: 24px;
`;
export const Title = styled.Text.attrs({
	numberOfLines: 1,
})`
	font-size: 18px;
	color: ${({ theme }) => theme.colors.text};
`;
export const MembersCountText = styled.Text.attrs({
	numberOfLines: 2,
})`
	font-size: 16px;
	color: ${({ theme }) => theme.colors.blueGray400};
`;
export const ViewMembersButton = styled.TouchableOpacity.attrs({
	activeOpacity: 0.6,
})`
	align-items: center;
	padding: 8px;
	border-radius: 8px;
	border-width: 1px;
	margin-top: 8px;
	background-color: ${({ theme }) => theme.colors.deepOrange700};
`;
export const ViewMembersButtonText = styled.Text.attrs({
	numberOfLines: 1,
})`
	color: ${({ theme }) => theme.colors.text};
	font-weight: 500;
	font-size: 14px;
	/* padding-top: 8px; */
`;
export const Modal = styled(Modalize).attrs(({ theme }) => ({
	adjustToContentHeight: true,
	withHandle: true,
	modalStyle: {
		backgroundColor: theme.colors.neutral900,
		position: 'absolute',
		bottom: 50,
		width: width - 32,
		left: 16,
		borderRadius: 12,
	},
}))``;

export const ModalTitle = styled.Text.attrs({
	numberOfLines: 1,
})`
	font-size: 18px;
	font-weight: bold;
	margin-top: 16px;
	margin-left: 16px;
	color: ${({ theme }) => theme.colors.text};
`;
export const GymTitle = styled.Text.attrs({
	numberOfLines: 1,
})`
	font-size: 24px;
	font-weight: bold;
	margin-left: 16px;

	color: ${({ theme }) => theme.colors.text};
`;
