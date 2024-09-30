import React from 'react';
import { View,Text,StyleSheet } from 'react-native';

export const DimensionScreen = () => {
  return (
    <View style={styles.container}>
        <Text>DimensionScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container:{
        width:'100%',
        backgroundColor:'red',
    },
});
