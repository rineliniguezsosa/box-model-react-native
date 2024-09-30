/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { SafeAreaView } from 'react-native';
// import { BoxObjectModel } from './src/presentation/screen/BoxObjectModel';
import { DimensionScreen } from './src/presentation/screen/DimensionScreen';

export const App = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <DimensionScreen/>
    </SafeAreaView>
  );
};
