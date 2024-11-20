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

export const UserInfoContainer = styled.View`
	margin-top: 24px;
	align-items: center;
`;
export const UserName = styled.Text`
	font-size: 24px;
	margin-top: 8px;
	color: ${({ theme }) => theme.colors.text};
`;
export const UserInfoText = styled.Text``;

export const ProfileLevelStatus = styled.View`
	padding: 16px;
	width: 100%;
	height: 120px;
	align-self: center;
	margin-top: 18px;
	background-color: ${({ theme }) => theme.colors.boxBackground};
	border-radius: 12px;
`;
export const LevelText = styled.Text`
	font-size: 18px;

	color: ${({ theme }) => theme.colors.text};
`;
export const LevelTextHighlight = styled.Text`
	font-size: 18px;
	color: ${({ theme }) => theme.colors.lightGreenA400};
	font-weight: bold;
`;
export const LevelTextInfo = styled.Text`
	font-size: 14px;
	margin-top: 4px;
	color: ${({ theme }) => theme.colors.secondaryText};
`;
export const LevelTextInfoLink = styled.Text`
	font-size: 14px;
	color: ${({ theme }) => theme.colors.secondaryText};
	font-weight: bold;
`;

export const ProfileLevel = styled.View`
	width: 100%;
	margin-top: 18px;
	margin-left: 16px;
	height: 8px;
	background-color: ${({ theme }) => theme.colors.neutral800};
	border-radius: 12px;
`;
export const ProfileLevelHighlight = styled.View`
	width: 10%;
	margin-top: 18px;
	margin-left: 16px;
	height: 8px;
	background-color: ${({ theme }) => theme.colors.lightGreenA400};
	border-radius: 12px;
	z-index: 999;
`;
