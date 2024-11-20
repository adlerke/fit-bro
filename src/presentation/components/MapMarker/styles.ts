import styled from 'styled-components/native';

export const Container = styled.View`
	width: 16px;
	height: 16px;
	border-radius: 8px;
	background-color: ${({ theme }) => theme.colors.deepOrange700};
`;
