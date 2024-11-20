import React from 'react';

import { Container } from './styles';
import Header from '../components/Header';
import { Alert, Text, TouchableOpacity } from 'react-native';
import FormInput from '../components/FormInput';
import { useTheme } from 'styled-components';
import { Controller, useForm } from 'react-hook-form';
import { supabase } from '~/utils/supabaseConfig';
import { InfoText } from '../SignInScreen/styles';

const SignUpScreen: React.FC = () => {
	const theme = useTheme();
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: {
			name: '',
			email: '',
			password: '',
		},
	});

	const onSubmit = async (data: { email: string; password: string }) => {
		// console.log(data);
		const { email, password } = data;
		const { error, data: okok } = await supabase.auth.signUp({
			email,
			password,
		});
		console.log(error);
		console.log(okok);

		if (error) Alert.alert(error.message);
	};

	return (
		<>
			<Header title="Criar conta" />
			<Container>
				{/* <FormInput name="name" placeholder="Nome" iconName="user" />
				<FormInput name="email" placeholder="E-mail" iconName="mail" /> */}

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
							secureTextEntry
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
				{/* <FormInput
					name="password"
					placeholder="Senha"
					secureTextEntry
					iconName="lock"
				/> */}
				{/* <FormInput
					name="confirm-password"
					placeholder="Confirme a Senha"
					iconName="check"
				/> */}
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
						Criar conta
					</Text>
				</TouchableOpacity>

				<Text
					style={{
						fontSize: 14,
						color: theme.colors.secondaryText,
						textAlign: 'center',
						marginTop: 12,
					}}>
					Ao se registrar você está concordando com os
				</Text>
				<Text
					style={{
						fontSize: 14,
						color: theme.colors.primary,
						textAlign: 'center',
					}}>
					Termos de uso
					<Text
						style={{
							fontSize: 14,
							color: theme.colors.secondaryText,
						}}>
						{' '}
						e{' '}
					</Text>
					Politicas de privacidade
				</Text>
			</Container>
		</>
	);
};

export default SignUpScreen;
