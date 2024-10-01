/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { SafeAreaView } from 'react-native';
// import { BoxObjectModel } from './src/presentation/screen/BoxObjectModel';
// import { DimensionScreen } from './src/presentation/screen/DimensionScreen';
// import { PositionScreen } from './src/presentation/screen/PositionScreen';
// import { FlexScreen } from './src/presentation/screen/FlexScreen';
// import { FlexDirectionScreen } from './src/presentation/screen/FlexDirectionScreen';
import { HomeWorkScreen } from './src/presentation/screen/HomeWorkScreen';

export const App = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <HomeWorkScreen/>
    </SafeAreaView>
  );
};
