/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { SafeAreaView } from 'react-native';
import { BoxObjectModel } from './src/presentation/screen/BoxObjectModel'; 

export const App = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <BoxObjectModel/>
    </SafeAreaView>
  );
};
