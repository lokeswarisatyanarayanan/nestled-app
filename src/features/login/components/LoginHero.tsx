import React from 'react';
import { View } from 'react-native';

import { NestledText } from '@components/Core/NestledText';

import { useStyles } from '../styles/styles';

export function LoginHero() {
  const { styles } = useStyles();

  return (
    <View style={styles.hero}>
      <NestledText variant="h1" style={styles.title}>
        Welcome to Nestled
      </NestledText>
      <NestledText variant="body2" style={styles.subtitle}>
        Cozy grocery tracking for two hearts
      </NestledText>
    </View>
  );
}
