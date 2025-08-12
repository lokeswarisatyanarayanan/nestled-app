import 'dotenv/config';

export default {
  expo: {
    name: 'Nestled',
    slug: 'nestled',
    version: '1.0.0',
    orientation: 'portrait',
    icon: './assets/icon.png',
    userInterfaceStyle: 'light',
    newArchEnabled: true,
    splash: {
      image: './assets/splash-icon.png',
      resizeMode: 'contain',
      backgroundColor: '#ffffff',
    },
    ios: {
      supportsTablet: true,
      bundleIdentifier: 'com.chaoticwhirlwind.nestled',
      googleServicesFile: './src/library/firebase/configuration/GoogleService-Info.plist',
      icon: './assets/icon.png',
    },
    android: {
      package: 'com.chaoticwhirlwind.nestled',
      adaptiveIcon: {
        foregroundImage: './assets/adaptive-icon.png',
        backgroundColor: '#ffffff',
      },
      googleServicesFile: './src/library/firebase/configuration/google-services.json',
      edgeToEdgeEnabled: true,
    },
    web: {
      favicon: './assets/favicon.png',
    },
    scheme: 'rntemplate',
    plugins: [
      'expo-router',
      'expo-secure-store',
      'expo-font',
      '@react-native-firebase/app',
      '@react-native-firebase/auth',
      [
        'expo-build-properties',
        {
          ios: {
            useFrameworks: 'static',
          },
        },
      ],
    ],
    experiments: {
      typedRoutes: true,
    },
  },
};
