import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';

const ProductItem = ({product}) => (
  <View style={styles.container}>
    <Image source={product.image} style={styles.image} />
    <View style={styles.details}>
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.price}>₹{product.price}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  image: {
    width: 50,
    height: 50,
  },
  details: {
    marginLeft: 10,
  },
  name: {
    fontSize: 16,
  },
  price: {
    fontSize: 14,
    color: 'grey',
  },
});

export default ProductItem;
