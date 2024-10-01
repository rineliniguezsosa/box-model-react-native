import React from 'react';
import { View,StyleSheet } from 'react-native';

export const FlexDirectionScreen = () => {
  return (
    <View style={styles.container}>
        <View style={[ styles.box,styles.box1 ]} />
        <View style={[ styles.box,styles.box2 ]} />
        <View style={[ styles.box,styles.box3 ]} />
    </View>
  );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        // backgroundColor:'yellow',
        justifyContent:'space-between',
        flexDirection:'row',
        alignItems:'stretch',
    },
    box:{
        width:100,
        height:100,
    },
    box1:{
        backgroundColor:'red',
        // flex:1,
    },
    box2:{
        backgroundColor:'green',
        // flex:2,
    },
    box3:{
        backgroundColor:'blue',
        // flex:3,
    },
});

