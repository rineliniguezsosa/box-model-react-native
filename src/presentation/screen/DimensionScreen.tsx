import React from 'react';
import { View,StyleSheet, useWindowDimensions,Text } from 'react-native';

export const DimensionScreen = () => {
    const { width,height } = useWindowDimensions();
  return (
    <View style={styles.container}>
        <View style={styles.blueBox}>DimensionScreen</View>

        <Text>w: {width}, h: {height}</Text>
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
