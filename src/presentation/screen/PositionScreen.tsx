import React from 'react';
import { View,Text, StyleSheet } from 'react-native';

export const PositionScreen = () => {
  return (
    <View style={styles.container}>
        <Text>PositionScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'green',
    },
    bluebox:{
        width:100,
        height:100,
        backgroundColor:'blue',
        borderWidth:10,
        borderColor:'white',
    },
});
