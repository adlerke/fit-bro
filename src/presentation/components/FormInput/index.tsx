import React, { useCallback, useRef, useState } from 'react';
import { TextInputProps } from 'react-native';
import { Container, TextInput, LabelText, IconContainer } from './styles';
import Feather from 'react-native-vector-icons/Feather';
import { useTheme } from 'styled-components';

interface InputProps extends TextInputProps {
	name: string;
	label?: string;
	iconName?: string;
}

const FormInput: React.FC<InputProps> = ({
	name,
	label,
	iconName,
	...rest
}) => {
	const [isFocused, setIsFocused] = useState(false);
	const theme = useTheme();

	const handleInputFocus = useCallback(() => {
		setIsFocused(true);
	}, []);
	const handleInputBlur = useCallback(() => {
		setIsFocused(false);
	}, []);

	return (
		<>
			{!!label && <LabelText>{label}</LabelText>}
			<Container isFocused={isFocused}>
				{!!iconName && (
					<IconContainer>
						<Feather
							name={iconName}
							size={22}
							color={
								isFocused ? theme.colors.neutral500 : theme.colors.neutral700
							}
						/>
					</IconContainer>
				)}

				<TextInput
					onFocus={handleInputFocus}
					onBlur={handleInputBlur}
					keyboardAppearance="dark"
					placeholderTextColor={theme.colors.neutral600}
					{...rest}
				/>
			</Container>
		</>
	);
};

export default FormInput;
