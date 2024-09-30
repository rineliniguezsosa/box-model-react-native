/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { SafeAreaView } from 'react-native';
// import { BoxObjectModel } from './src/presentation/screen/BoxObjectModel';
// import { DimensionScreen } from './src/presentation/screen/DimensionScreen';
import { PositionScreen } from './src/presentation/screen/PositionScreen';

export const App = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <PositionScreen/>
    </SafeAreaView>
  );
};
