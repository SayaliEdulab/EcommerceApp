// SearchScreen.js

import React, {useState, useEffect} from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import SearchCategoryItem from '../components/SearchCategoryItem';
import {getLatestProducts, searchProducts} from '../api/dummyApi';
import SearchIcon from '../assets/svg/search.svg';

const SearchScreen = ({navigation}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    const fetchLatestProducts = async () => {
      const data = await getLatestProducts();
      setLatestProducts(data);
    };
    fetchLatestProducts();
  }, []);

  useEffect(() => {
    const performSearch = async () => {
      if (searchQuery.length > 0) {
        const results = await searchProducts(searchQuery);
        setSearchResults(results);
      } else {
        setSearchResults([]);
      }
    };
    performSearch();
  }, [searchQuery]);

  const handleProductPress = product => {
    navigation.navigate('SearchResult', {
      productId: product.id,
      name: product.name,
    });
  };

  const renderProductItem = ({item}) => (
    <SearchCategoryItem category={item} onPress={handleProductPress} />
  );

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search for products..."
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        <TouchableOpacity style={styles.iconContainer}>
          <SearchIcon width={24} height={24} />
        </TouchableOpacity>
      </View>
      {searchQuery.length > 0 ? (
        <>
          <Text style={styles.header}>Search Results</Text>
          <FlatList
            data={searchResults}
            renderItem={renderProductItem}
            keyExtractor={item => item.id.toString()}
            numColumns={1}
            key={'search-1'} // Force re-render
          />
        </>
      ) : (
        <>
          <Text style={styles.header}>Latest Products</Text>
          <FlatList
            data={latestProducts}
            renderItem={renderProductItem}
            keyExtractor={item => item.id.toString()}
            numColumns={1}
            key={'latest-1'} // Force re-render
          />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'white',
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
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
});

export default SearchScreen;
