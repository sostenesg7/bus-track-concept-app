import React from 'react';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  fromToSubContainer: {
    flex: 1,
  },
  fromToContainer: {
    backgroundColor: '#FFF',
    flexDirection: 'row',
    paddingVertical: 14,
    borderRadius: 12,
    shadowColor: '#212121FF',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 4,
  },
  container: {
    flex: 1,
  },
});

export default styles;
