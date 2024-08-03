import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Profile from '../assets/svg/fillprofile.svg';

const OverviewScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Overview Screen</Text>
      <Profile width={100} height={100} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default OverviewScreen;
