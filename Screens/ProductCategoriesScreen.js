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
import BackIcon from '../assets/svg/backarrow.svg';

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
        <TouchableOpacity
          style={styles.backIconContainer}
          onPress={() => navigation.goBack()}>
          <BackIcon width={28} height={28} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.searchInput}
          onPress={() => navigation.navigate('Search')}>
          <Text style={styles.product}> Product Categories </Text>
          <Text style={styles.subText}> Select any product to add </Text>
        </TouchableOpacity>
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
  backIconContainer: {
    position: 'absolute',
    left: 10,
    top: '45%',
    transform: [{translateY: -12}],
  },
  searchInput: {
    height: 70,
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
  product: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    paddingLeft: 40,
    padding: 4,
    marginTop: 3,
  },
  subText: {
    fontSize: 16,
    color: 'grey',
    paddingLeft: 40,
  },
});

export default ProductCategoriesScreen;
