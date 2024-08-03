/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  Modal,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import SubCategoryItem from '../components/SubCategoryItem';
import {getSubCategories} from '../api/dummyApi';

const SubCategoriesScreen = ({route, navigation}) => {
  const {name} = route.params;
  const [subCategories, setSubCategories] = useState([]);
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);

  useEffect(() => {
    const fetchSubCategories = async () => {
      const data = await getSubCategories(name);
      setSubCategories(data);
    };
    fetchSubCategories();
  }, [name]);

  const handleSubCategoryPress = subCategory => {
    setSelectedSubCategory(subCategory);
  };

  const closeModal = () => {
    setSelectedSubCategory(null);
  };

  const numColumns = 2; // Fixed number of columns

  const renderSubCategoryItem = ({item}) => (
    <SubCategoryItem subCategory={item} onPress={handleSubCategoryPress} />
  );

  return (
    <View style={styles.container}>
      {subCategories.length > 0 ? (
        <FlatList
          data={subCategories}
          renderItem={renderSubCategoryItem}
          keyExtractor={item => item.id.toString()}
          numColumns={numColumns}
        />
      ) : (
        <View style={styles.noProductsContainer}>
          <Text style={styles.noProductsText}>No products available</Text>
        </View>
      )}
      <Modal
        visible={!!selectedSubCategory}
        transparent={true}
        animationType="slide"
        onRequestClose={closeModal}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            {selectedSubCategory && (
              <>
                <View style={styles.modalTextContainer}>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={styles.modalName1}>
                      {selectedSubCategory.description}
                    </Text>
                    <Image
                      source={selectedSubCategory.image}
                      style={styles.modalImage}
                    />
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <Text style={styles.modalweight}>250g</Text>
                    <Text style={styles.modalPrice}>
                      Price: ${selectedSubCategory.price}
                    </Text>
                    <TouchableOpacity
                      onPress={() => {
                        /* Add to cart logic */
                      }}
                      style={styles.addButton}>
                      <Text style={styles.addButtonText}> + Add</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </>
            )}
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'white',
  },
  noProductsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noProductsText: {
    fontSize: 20,
    color: 'grey',
    fontStyle: 'italic',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    width: '100%',
    height: '35%',
    padding: 15,
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalImage: {
    width: 100,
    height: 100,
  },
  modalTextContainer: {
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: '#ededed',
    borderRadius: 10,
    padding: 5,
    backgroundColor: '#dbdbdb',
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 5,
  },
  modalName: {
    fontSize: 18,
  },
  modalName1: {
    fontSize: 18,
    width: 260,
  },
  modalPrice: {
    marginTop: 15,
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 80,
    color: 'black',
  },
  modalweight: {
    marginTop: 15,
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  closeButton: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#007bff',
    borderRadius: 5,
    alignSelf: 'flex-start',
  },
  closeButtonText: {
    color: 'white',
    fontSize: 16,
  },
  addButton: {
    marginTop: 10,
    padding: 7,
    backgroundColor: 'white',
    borderRadius: 5,
    alignSelf: 'flex-start',
  },
  addButtonText: {
    color: '#28a745',
    fontSize: 16,
    fontWeight: '700',
    paddingHorizontal: 20,
  },
});

export default SubCategoriesScreen;
