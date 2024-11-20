import React from 'react';

import { Container, InfoContainer, InfoText, Title } from './styles';
import Header from '../components/Header';
import { Alert, Text, TouchableOpacity } from 'react-native';
import FormInput from '../components/FormInput';
import { useTheme } from 'styled-components';
import Feather from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import { useForm, Controller } from 'react-hook-form';
import { supabase } from '~/utils/supabaseConfig';

const SignInScreen: React.FC = () => {
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: {
			email: '',
			password: '',
		},
	});

	const theme = useTheme();
	const navigation = useNavigation();

	const navigateToSignUp = () => {
		navigation.navigate('SignUpScreen' as never);
	};
	const onSubmit = async (data: { email: string; password: string }) => {
		// console.log(data);
		const { email, password } = data;
		const { error, data: okok } = await supabase.auth.signInWithPassword({
			email,
			password,
		});
		console.log(error);
		console.log(okok);

		if (error) Alert.alert(error.message);
	};
	const logOut = async () => {
		const { error } = await supabase.auth.signOut();
		console.log(error);
	};

	return (
		<>
			<Header title="Entrar" />
			<Container>
				<InfoContainer>
					<Feather
						name="alert-triangle"
						color={theme.colors.secondaryText}
						size={32}
					/>
					<InfoText>Você precisa estar logado para usar essa função </InfoText>
				</InfoContainer>
				<Controller
					control={control}
					rules={{
						required: true,
					}}
					render={({ field: { onChange, onBlur, value } }) => (
						<FormInput
							name="email"
							placeholder="E-mail"
							iconName="mail"
							value={value}
							onBlur={onBlur}
							onChangeText={onChange}
						/>
					)}
					name="email"
				/>
				{errors.email && <Text>This is required.</Text>}
				<Controller
					control={control}
					rules={{
						required: true,
					}}
					render={({ field: { onChange, onBlur, value } }) => (
						<FormInput
							name="password"
							placeholder="Senha"
							iconName="lock"
							value={value}
							onBlur={onBlur}
							onChangeText={onChange}
						/>
					)}
					name="password"
				/>
				{errors.password && (
					<InfoText>Você precisa informar uma senha </InfoText>
				)}
				<TouchableOpacity
					style={{
						marginTop: 14,
						width: 'auto',
						backgroundColor: theme.colors.primary,
						alignItems: 'center',
						padding: 12,
						borderRadius: 8,
					}}
					onPress={handleSubmit(onSubmit)}>
					<Text
						style={{
							fontSize: 18,
							color: theme.colors.text,
						}}>
						Entrar
					</Text>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={logOut}
					style={{
						marginTop: 12,
						width: 'auto',
						backgroundColor: theme.colors.neutral900,
						alignItems: 'center',
						padding: 12,
						borderRadius: 8,
					}}>
					<Text
						style={{
							fontSize: 18,
							color: theme.colors.text,
						}}>
						Redefinir senha
					</Text>
				</TouchableOpacity>

				<TouchableOpacity
					onPress={navigateToSignUp}
					style={{
						marginTop: 12,
						width: 'auto',
						alignItems: 'center',
						flexDirection: 'row',
						justifyContent: 'center',
					}}>
					<Text
						style={{
							fontSize: 16,
							color: theme.colors.secondaryText,
						}}>
						Não tem uma conta?
					</Text>
					<Text
						style={{
							fontSize: 16,
							color: theme.colors.text,
							marginLeft: 4,
						}}>
						Registre-se
					</Text>
				</TouchableOpacity>
			</Container>
		</>
	);
};

export default SignInScreen;
