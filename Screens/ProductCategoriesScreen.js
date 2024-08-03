import React, {useState, useEffect} from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import CategoryItem from '../components/CategoryItem';
import {getProductCategories} from '../api/dummyApi';
import SearchIcon from '../assets/svg/search.svg';

const ProductCategoriesScreen = ({navigation}) => {
  const [categories, setCategories] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchCategories = async () => {
      const data = await getProductCategories();
      setCategories(data);
    };
    fetchCategories();
  }, []);

  const handleCategoryPress = category => {
    navigation.navigate('SubCategories', {
      categoryId: category.id,
      name: category.name,
    });
  };

  const renderCategoryItem = ({item}) => (
    <CategoryItem category={item} onPress={handleCategoryPress} />
  );

  // Filter categories based on search query
  const filterCategories = type => {
    return categories
      .filter(category => category.type === type)
      .filter(category =>
        category.name.toLowerCase().includes(searchQuery.toLowerCase()),
      );
  };

  const snacksAndDrinks = filterCategories('Snacks').concat(
    filterCategories('Drinks'),
  );
  const beautyCare = filterCategories('Beauty Care');

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Select any product to add..."
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        <TouchableOpacity
          style={styles.iconContainer}
          onPress={() => navigation.navigate('Search')}>
          <SearchIcon width={24} height={24} />
        </TouchableOpacity>
      </View>
      <Text style={styles.header}>Snacks & Drinks</Text>
      <FlatList
        data={snacksAndDrinks}
        renderItem={renderCategoryItem}
        keyExtractor={item => item.id.toString()}
        numColumns={4}
      />
      <Text style={styles.header}>Beauty Care</Text>
      <FlatList
        data={beautyCare}
        renderItem={renderCategoryItem}
        keyExtractor={item => item.id.toString()}
        numColumns={4}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'white',
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  searchContainer: {
    position: 'relative',
    marginBottom: 10,
  },
  searchInput: {
    height: 60,
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingRight: 50, // Add padding to make space for the icon
  },
  iconContainer: {
    position: 'absolute',
    right: 10,
    top: 15, // Adjust this value based on the height of the TextInput
    height: 30,
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ProductCategoriesScreen;
