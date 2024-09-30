import React from 'react';
import { View,Text, StyleSheet } from 'react-native';

export const BoxObjectModel = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>BoxObjectModel</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'red',
    },
    title:{
        fontSize:50,
        paddingHorizontal:30,
        paddingVertical:10,
        borderWidth:10,
    },
});
