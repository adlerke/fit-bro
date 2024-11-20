import styled, { css } from 'styled-components/native';

interface ContainerProps {
	isFocused: boolean;
}

export const Container = styled.View<ContainerProps>`
	width: 100%;
	/* min-height: 56px; para multi-line */
	height: 56px;
	padding: 0px 16px;
	border-radius: 16px;
	margin-bottom: 8px;
	border-width: 2px;
	border-color: ${({ theme }) => theme.colors.border};
	${({ isFocused }) =>
		isFocused &&
		css`
			border-color: ${({ theme }) => theme.colors.neutral500};
		`}

	flex-direction: row;
	align-items: center;
`;
export const TextInput = styled.TextInput`
	flex: 1;
	color: ${({ theme }) => theme.colors.text};
	font-size: 16px;
`;

export const TextError = styled.Text`
	color: #999;
	margin-bottom: 4px;
	font-size: 12px;
`;
export const LabelText = styled.Text`
	color: ${({ theme }) => theme.colors.text};
	margin-bottom: 12px;
	margin-top: 12px;
	font-size: 18px;
`;
export const IconContainer = styled.View`
	margin-right: 8px;
`;
