import React from 'react';
import { View } from 'react-native';

import { NestledButton } from '@components/Core/NestledButton';
import { NestledTextInput } from '@components/Core/NestledTextInput';
import { Screen } from '@components/Screen';

import { LoginHero } from '../components/LoginHero';
import { useAuth } from '../hook/useAuth';
import { useStyles } from '../styles/styles';

function LoginScreen() {
  const { styles } = useStyles();
  const { phoneNumber, setPhoneNumber, login, isLoading } = useAuth();

  return (
    <Screen>
      <View style={styles.container}>
        <LoginHero />

        <NestledTextInput
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          placeholder="Enter your phone number"
          keyboardType="phone-pad"
        />

        <NestledButton label="Send OTP" onPress={login} loading={isLoading} />
      </View>
    </Screen>
  );
}

export default LoginScreen;
