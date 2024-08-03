// CategoryItem.js

import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

const SearchCategoryItem = ({category, onPress}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => onPress(category)}>
      <Image source={category.image} style={styles.image} />
      <Text style={styles.name}>{category.name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 5,
    padding: 5,
    backgroundColor: 'white',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },
  image: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  name: {
    fontSize: 16,
  },
});

export default SearchCategoryItem;
