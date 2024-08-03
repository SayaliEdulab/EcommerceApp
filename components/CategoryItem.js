import React from 'react';
import {TouchableOpacity, Image, Text, StyleSheet, View} from 'react-native';

const CategoryItem = ({category, onPress}) => (
  <TouchableOpacity style={styles.container} onPress={() => onPress(category)}>
    <View style={styles.maincontainer}>
      <View style={{padding: 10, backgroundColor: 'white'}}>
        <Image source={category.image} style={styles.image} />
      </View>
    </View>
    <Text style={styles.name}>{category.name}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    margin: 6,
  },
  maincontainer: {
    borderWidth: 1,
    borderColor: '#dedede',
    borderRadius: 2,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 5,
  },
  image: {
    width: 60,
    height: 60,
    padding: 4,
  },
  name: {
    marginTop: 5,
    textAlign: 'center',
  },
});

export default CategoryItem;
