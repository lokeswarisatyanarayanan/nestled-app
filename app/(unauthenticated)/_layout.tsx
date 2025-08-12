import { Stack } from 'expo-router';

export default function UnauthenticatedLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="onboarding"
        options={{
          title: 'Onboarding',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="login"
        options={{
          title: 'Log In',
          headerShown: false,
        }}
      />
    </Stack>
  );
}
