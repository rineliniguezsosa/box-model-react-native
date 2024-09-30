import React from 'react';
import { View,StyleSheet, useWindowDimensions,Text } from 'react-native';

export const DimensionScreen = () => {
    const { width,height } = useWindowDimensions();
  return (
    <View>
        <View style={styles.container}>
            {/* Wrap text inside a Text component */}
            <View style={{...styles.blueBox,width:width * 0.6}} />
        </View>
        {/* comments */}
        <Text>h:{height}, w:{width}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container:{
        width:300,
        height:300,
        backgroundColor:'red',
    },
    blueBox:{
        backgroundColor:'blue',
        height:'50%',
        width:'50%',
    },
});
