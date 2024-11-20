import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs({
	contentContainerStyle: {
		paddingBottom: 16,
	},
})`
	flex: 1;
	background-color: ${({ theme }) => theme.colors.bgDark};
	padding: 0px 16px;
`;

export const InfoContainer = styled.View`
	width: auto;
	background-color: ${({ theme }) => theme.colors.neutral900};
	margin-top: 24px;
	flex-direction: row;
	align-items: center;
	padding: 16px;
	border-radius: 8px;
	margin-bottom: 18px;
`;
export const InfoText = styled.Text`
	margin-left: 12px;
	font-size: 16px;
	width: 80%;
	color: ${({ theme }) => theme.colors.secondaryText};
`;
export const Title = styled.Text`
	font-size: 24px;
	color: ${({ theme }) => theme.colors.text};
`;
