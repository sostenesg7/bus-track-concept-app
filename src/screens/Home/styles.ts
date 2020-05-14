import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';
const {width} = Dimensions.get('window');

// Later on in your styles..
const styles = StyleSheet.create({
  listContainer: {
    position: 'absolute',
    bottom: -500,
  },
  bottomMenu: {
    height: 80,
    position: 'absolute',
    bottom: 0,
    width,
  },
  busCardContainer: {
    position: 'absolute',
    width,
    bottom: -500,
    paddingHorizontal: 30,
  },
  originDestination: {
    position: 'absolute',
    top: -400,
    right: 0,
    left: 0,
    padding: 30,
    width,
  },
  homeContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  homeTrackHeader: {
    top: -100,
    paddingHorizontal: 30,
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
  },
  mapConainer: {
    flex: 1,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  mapMarker: {
    borderRadius: 30,
    backgroundColor: '#E65100FF',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    width: 20,
    height: 20,
    padding: 2,
    elevation: 4,
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
  buttonText: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 18,
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});

export default styles;
