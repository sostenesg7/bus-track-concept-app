import React from 'react';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  profileImage: {
    width: 30,
    height: 30,
  },
  profileContainer: {
    width: 30,
    height: 30,
    borderRadius: 50,
    overflow: 'hidden',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
    paddingBottom: 14,
    paddingHorizontal: 40,
    alignItems: 'flex-end',
  },
});

export default styles;
