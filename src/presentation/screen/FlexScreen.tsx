import React from 'react';
import { View, Text,StyleSheet } from 'react-native';

export const FlexScreen = () => {
  return (
    <View style={styles.container}>
        <Text>FlexScreen</Text>
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

