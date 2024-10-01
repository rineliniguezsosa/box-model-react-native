import React from 'react';
import { View,StyleSheet } from 'react-native';

export const FlexScreen = () => {
  return (
    <View style={styles.container}>
        <View style={styles.box1} />
        <View style={styles.box2} />
        <View style={styles.box3} />
    </View>
  );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'yellow',
    },
    box1:{
        backgroundColor:'red',
    },
    box2:{
        backgroundColor:'green',
    },
    box3:{
        backgroundColor:'blue',
    },
});

