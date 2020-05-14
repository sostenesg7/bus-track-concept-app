import React from 'react';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  roundedIcon: {
    width: 22,
  },
  originInfoContainer: {
    flexDirection: 'row',
  },
  resumeInfo: {
    flex: 1,
  },
  resumeContainer: {
    flexDirection: 'row',
    marginTop: 16,
  },
  originDestinationIconContainer: {
    width: 22,
    alignItems: 'flex-start',
  },
  destinationButtonContainer: {
    flexDirection: 'row',
  },
  originDestinationSeparatorContainer: {
    alignSelf: 'flex-start',
    flex: 1,
    width: 14,
  },
  originDestinationSeparator: {
    alignSelf: 'center',
    marginTop: 5,
  },
  callButtonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    marginLeft: 30, //backgroundColor: 'green'
  },
  callButton: {
    flexDirection: 'row',
    backgroundColor: '#E65100FF',
    borderRadius: 10,
    padding: 3,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  callButtonIcon: {
    backgroundColor: '#FFF',
    borderRadius: 7,
    width: 36,
    height: 36,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  callButtonTitle: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 10,
    color: '#FFF',
    textAlign: 'center',
    alignSelf: 'center',
    flex: 1,
  },
  originDestinationIcon: {
    height: 14,
    width: 14,
    borderRadius: 20,
    backgroundColor: '#0091EAFF',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  destinationDate: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 10,
    color: '#616161FF',
  },
  destinationTitle: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 12,
    color: '#212121FF',
  },
  destinationContainer: {
    flex: 1,
  },
  share: {
    width: 40,
    height: 40,
    //marginLeft: 16,
    backgroundColor: '#00C853FF',
    borderRadius: 12,
    alignSelf: 'center',
    shadowColor: '#212121FF',
    shadowOffset: {
      width: -0.5,
      height: 0.5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  travelTimeContainer: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  travelTimeValue: {
    color: '#212121FF', //
  },
  travelTimeTitle: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 10,
    color: '#616161FF',
  },
  travelTime: {
    justifyContent: 'space-between',
    marginHorizontal: 16,
    alignSelf: 'center',
    paddingBottom: 6,
  },
  originDistanceUnity: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 16,
    //
    color: '#212121FF',
  },
  originDistanceValue: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 30,
    color: '#212121FF',
  },
  originDistance: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 10,
    color: '#616161FF',
  },
  originTop: {
    justifyContent: 'space-between', // backgroundColor: 'red'
  },
  origin: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
  },
  container: {
    backgroundColor: '#FFF',
    padding: 18,
    borderRadius: 18,
    shadowColor: '#212121FF',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 4,
    marginVertical: 6,
  },
});

export default styles;
