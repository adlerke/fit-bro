import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs({
	contentContainerStyle: {
		paddingBottom: 22,
	},
})`
	flex: 1;
	background-color: ${({ theme }) => theme.colors.bgDark};
	padding: 0px 16px;
`;
export const InfoContainer = styled.View`
	width: auto;
	background-color: ${({ theme }) => theme.colors.brown900};
	margin-top: 24px;
	flex-direction: row;
	align-items: center;
	padding: 16px;
	border-radius: 8px;
	margin-bottom: 18px;
`;
export const InfoTextTitle = styled.Text`
	margin-left: 12px;
	font-size: 16px;
	width: 70%;
	font-weight: bold;
	color: ${({ theme }) => theme.colors.brown200};
`;
export const InfoText = styled.Text`
	margin-left: 12px;
	font-size: 16px;
	width: 70%;
	margin-top: 12px;
	color: ${({ theme }) => theme.colors.brown200};
`;
export const Body = styled.View`
	flex-direction: column;
`;
