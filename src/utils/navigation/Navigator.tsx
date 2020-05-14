import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './Routes';

export interface Props {

};

const Navigator = (props: Props) => {
  return (
    <NavigationContainer>
      {AuthStack()}
    </NavigationContainer>
  );
};

export default Navigator;
