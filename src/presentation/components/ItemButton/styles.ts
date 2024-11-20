import styled from 'styled-components/native';

type StyledTextProps = {
	color?: string;
};
type StyledContainerProps = {
	hasBottomBorder?: boolean;
};
export const Container = styled.TouchableOpacity<StyledContainerProps>`
	padding: 8px;
	border-bottom-width: ${({ hasBottomBorder }) => (hasBottomBorder ? 1 : 0)}px;
	border-bottom-color: ${({ theme }) => theme.colors.bgDark};
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
`;

export const Title = styled.Text<StyledTextProps>`
	font-size: 18px;
	color: ${({ color, theme }) => color ?? theme.colors.secondaryText};
`;

export const LeftContainer = styled.View`
	flex-direction: row;
	align-items: center;
`;
export const RigthContainer = styled.View``;
