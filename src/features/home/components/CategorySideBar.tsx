import React from 'react';
import { View, Pressable, ScrollView } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { NestledText } from '@components/Core/NestledText';
import { useTheme } from '@library/design/hooks';

import { WithId } from '@/library/firebase/firestore/client';

import { styles } from './styles';
import { GroceryCategory } from '../service';

type MCIIconName = keyof typeof MaterialCommunityIcons.glyphMap;

interface CategorySidebarProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
  categories: WithId<GroceryCategory>[];
}

export function CategorySidebar({
  selectedCategory,
  onSelectCategory,
  categories,
}: CategorySidebarProps) {
  const theme = useTheme();
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.sidebar,
        {
          backgroundColor: theme.colors.background.sidebar,
          borderRightColor: theme.colors.border.default,
          paddingTop: theme.spacing.large + insets.top,
        },
      ]}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        {categories.map(({ id, slug, icon, name }) => {
          const isSelected = slug === selectedCategory;

          return (
            <Pressable
              key={id}
              onPress={() => onSelectCategory(slug)}
              style={styles.categoryWrapper}
            >
              <View
                style={[
                  styles.iconCircle,
                  {
                    backgroundColor: isSelected
                      ? theme.colors.background.card
                      : theme.colors.background.surface,
                  },
                ]}
              >
                <MaterialCommunityIcons
                  name={icon as MCIIconName}
                  size={20}
                  color={isSelected ? theme.colors.icon.active : theme.colors.icon.inactive}
                />
              </View>
              <NestledText
                variant="caption"
                style={{
                  color: isSelected ? theme.colors.text.primary : theme.colors.text.muted,
                  fontWeight: isSelected ? '600' : '400',
                  textAlign: 'center',
                }}
              >
                {name}
              </NestledText>
            </Pressable>
          );
        })}
      </ScrollView>
    </View>
  );
}
