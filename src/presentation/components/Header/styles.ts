import styled from 'styled-components/native';

export const Container = styled.View`
	background-color: ${({ theme }) => theme.colors.bgDark};
	margin-top: 24px;
	padding: 16px;
	flex-direction: row;
	align-items: center;
`;
export const IconContainer = styled.TouchableOpacity.attrs({
	activeOpacity: 0.6,
})`
	padding: 8px;
	border-radius: 8px;
	border-left-width: 4px;
	border-right-width: 1px;
	border-top-width: 1px;
	border-bottom-width: 1px;
	margin-right: 16px;
	border-color: ${({ theme }) => theme.colors.secondaryText};
`;
export const Title = styled.Text`
	font-size: 28px;
	color: ${({ theme }) => theme.colors.text};
`;
