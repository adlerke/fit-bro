import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs({
	contentContainerStyle: {
		paddingBottom: 16,
		paddingTop: 24,
	},
})`
	flex: 1;
	background-color: ${({ theme }) => theme.colors.bgDark};
	padding: 0px 16px;
`;
