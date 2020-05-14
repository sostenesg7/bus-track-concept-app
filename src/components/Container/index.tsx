import React, { Children } from 'react';
import { SafeAreaView } from 'react-native';
import { Props } from './props';
import styles from './styles';

const Container = (props: Props) => {

  return (
    <SafeAreaView
      style={[styles.container, props.containerStyle]}>
      {props.children}
    </SafeAreaView>
  );

};

export default Container;

