import React from 'react';
import { View, FlatList } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import { NestledText } from '@components/Core/NestledText';
import { NestledTextInput } from '@components/Core/NestledTextInput';
import { Screen } from '@components/Screen';

import { useTheme } from '@/library';

import { CategorySidebar } from '../components/CategorySideBar';
import { GroceryCard } from '../components/GroceryCard';
import { useHome } from '../hooks';
import { useStyles } from './styles';

function HomeScreen() {
  const {
    selectedCategory,
    setSelectedCategory,
    searchText,
    setSearchText,
    categoryFilteredItems,
    groceryCategories,
    searchResults,
  } = useHome();

  const { styles } = useStyles();
  const { colors } = useTheme();

  const isSearching = searchText.trim().length > 0;
  const displayItems = isSearching ? searchResults : categoryFilteredItems;

  return (
    <Screen padding={0} safeArea={false}>
      <View style={styles.container}>
        <CategorySidebar
          categories={groceryCategories}
          selectedCategory={isSearching ? '' : selectedCategory}
          onSelectCategory={setSelectedCategory}
        />

        <View style={styles.main}>
          <View style={styles.searchWrapper}>
            <NestledTextInput
              value={searchText}
              onChangeText={setSearchText}
              placeholder="Search groceries..."
              leftIcon={
                <MaterialCommunityIcons name="magnify" size={20} color={colors.icon.active} />
              }
            />
          </View>

          {isSearching && (
            <NestledText
              variant="caption"
              style={{
                marginBottom: 8,
                marginLeft: 8,
                color: colors.text.muted,
              }}
            >
              {displayItems.length} results
            </NestledText>
          )}

          <FlatList
            data={displayItems}
            keyExtractor={item => item.id}
            numColumns={2}
            contentContainerStyle={styles.listContent}
            columnWrapperStyle={styles.columnWrapper}
            renderItem={({ item }) => (
              <View style={styles.card}>
                <GroceryCard item={item} highlight={searchText.trim()} />
              </View>
            )}
          />
        </View>
      </View>
    </Screen>
  );
}

export default HomeScreen;
