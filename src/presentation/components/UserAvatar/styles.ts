import styled from 'styled-components/native';

type ImageContainerProps = {
	size: number;
};

export const ContainerPressable = styled.TouchableOpacity`
	margin-left: 8px;
	width: 72px;
	justify-content: center;
	align-items: center;
`;
export const ContainerReadOnly = styled.View`
	width: 72px;
	justify-content: center;
	align-items: center;
`;

export const ImageContainer = styled.View<ImageContainerProps>`
	width: ${({ size }) => size * 1.06}px;
	height: ${({ size }) => size * 1.06}px;
	border-radius: 999px;
	align-items: center;
	justify-content: center;
	background-color: ${({ theme }) => theme.colors.blueGray400};
`;
export const UserNameText = styled.Text.attrs({
	numberOfLines: 1,
})`
	font-size: 14px;
	margin-top: 12px;
	text-align: center;
	color: ${({ theme }) => theme.colors.text};
`;
