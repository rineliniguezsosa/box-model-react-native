import React from 'react';
import { View,StyleSheet } from 'react-native';

export const DimensionScreen = () => {
  return (
    <View style={styles.container}>
        <View style={styles.blueBox}>DimensionScreen</View>
    </View>
  );
};

const styles = StyleSheet.create({
    container:{
        width:'100%',
        backgroundColor:'red',
    },
    blueBox:{
        backgroundColor:'blue',
        height:'50%',
        width:'50%',
    },
});
