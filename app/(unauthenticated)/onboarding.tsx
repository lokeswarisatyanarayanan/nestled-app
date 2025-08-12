import React from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native';

import { useRouter } from 'expo-router';

import { useAppStore } from '@src/state';

export default function OnboardingScreen() {
  const router = useRouter();
  const setOnboarded = useAppStore(state => state.app.setOnboarded);

  const handleContinue = () => {
    setOnboarded(true);
    router.replace('/(unauthenticated)/login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Onboarding</Text>

      <Pressable onPress={handleContinue} style={styles.button}>
        <Text style={styles.buttonText}>Continue</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontFamily: 'Quicksand_600SemiBold',
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontFamily: 'Quicksand_600SemiBold',
    fontSize: 16,
  },
});
