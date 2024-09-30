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
});
