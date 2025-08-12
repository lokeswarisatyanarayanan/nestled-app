import React from 'react';
import { View, Image, Pressable, Dimensions, StyleSheet, Text } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import Svg, { Line } from 'react-native-svg';

import { NestledText } from '@components/Core/NestledText';
import { useTheme } from '@library/design/hooks';

import { colors, radius, spacing } from '@/library/design';

import { GroceryItem } from '../service';

interface Props {
  item: GroceryItem;
  onAdd?: () => void;
  highlight?: string;
}

const screenWidth = Dimensions.get('window').width;
const sidebarWidth = 90;
const numColumns = 2;
const gap = 20;
const availableWidth = screenWidth - sidebarWidth - gap * (numColumns + 1);
const cardSize = availableWidth / numColumns;

export function GroceryCard({ item, onAdd, highlight }: Props) {
  const theme = useTheme();

  const renderHighlightedName = () => {
    if (!highlight?.trim()) {
      return (
        <NestledText variant="body2" style={styles.name}>
          {item.name}
        </NestledText>
      );
    }

    const regex = new RegExp(`(${highlight})`, 'i');
    const parts = item.name.split(regex);

    return (
      <Text style={styles.name}>
        {parts.map((part, index) =>
          regex.test(part) ? (
            <Text key={index}>{part}</Text>
          ) : (
            <Text key={index} style={{ color: theme.colors.text.muted, fontWeight: '700' }}>
              {part}
            </Text>
          ),
        )}
      </Text>
    );
  };

  return (
    <View style={styles.wrapper}>
      <View style={[styles.card, { backgroundColor: theme.colors.background.card }]}>
        <Image source={{ uri: item.iconUrl }} style={styles.icon} />

        {renderHighlightedName()}

        <Pressable onPress={onAdd} style={styles.addButton}>
          <MaterialCommunityIcons name="plus" size={20} color={theme.colors.icon.active} />
        </Pressable>
      </View>

      <NestledText variant="caption" style={styles.fact}>
        {item.funFact}
      </NestledText>

      <Svg height="1" width="75%" style={styles.dottedLine}>
        <Line
          x1="0"
          y1="0"
          x2="100%"
          y2="0"
          stroke={theme.colors.border.highlight}
          strokeWidth="2"
          strokeDasharray="4,3"
        />
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: cardSize,
    marginBottom: spacing.medium,
  },
  card: {
    height: cardSize * 0.9,
    borderRadius: radius.large,
    padding: spacing.medium,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    shadowColor: colors.shadow.soft,
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 5,
  },
  icon: {
    width: 52,
    height: 52,
    marginBottom: spacing.xsmall,
  },
  name: {
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 14,
  },
  addButton: {
    position: 'absolute',
    top: spacing.small,
    right: spacing.small,
  },
  fact: {
    marginTop: spacing.small,
    paddingHorizontal: spacing.small,
    textAlign: 'center',
    lineHeight: 16,
  },
  dottedLine: {
    marginTop: spacing.large,
    marginHorizontal: spacing.large,
  },
});
