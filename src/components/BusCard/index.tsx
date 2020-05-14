import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Svg, Line} from 'react-native-svg';
import styles from './styles';

const TravelCard = ({time}) => (
  <View
    style={{
      flexDirection: 'row',
      alignContent: 'center',
      alignItems: 'center',
    }}>
    <Icon name={'bus'} size={16} color={'#212121FF'} />
    <Text
      style={{
        fontFamily: 'Montserrat-Medium',
        fontSize: 10,
        color: '#616161FF',
      }}>
      {time}
    </Text>
  </View>
);

const BusCard = (props) => (
  <View style={styles.container}>
    <View style={styles.origin}>
      <View style={styles.originTop}>
        <Text style={styles.originDistance}>Distance</Text>

        <View style={{}}>
          <Text style={styles.originDistanceValue}>
            20
            <Text style={styles.originDistanceUnity}> km</Text>
          </Text>
        </View>
      </View>

      <View style={styles.travelTime}>
        <Text style={styles.travelTimeTitle}>
          Travel time: <Text style={styles.travelTimeValue}> 15 min</Text>
        </Text>

        <View style={styles.travelTimeContainer}>
          <TravelCard time={'16:00'} />
          <TravelCard time={'16:30'} />
        </View>
      </View>

      <TouchableOpacity style={styles.share}>
        <Icon name={'share-variant'} size={22} color={'#FFF'} />
      </TouchableOpacity>
    </View>

    <View style={styles.resumeContainer}>
      <View style={styles.resumeInfo}>
        <TouchableOpacity style={styles.originInfoContainer}>
          <View style={styles.roundedIcon}>
            <View style={styles.originDestinationIcon}>
              <Icon name={'chevron-up'} color={'#FFF'} size={12} />
            </View>

            <View style={styles.originDestinationSeparatorContainer}>
              <Svg
                height={40}
                width={1}
                style={styles.originDestinationSeparator}>
                <Line
                  stroke="#616161FF"
                  strokeDasharray="4, 4"
                  strokeWidth={1}
                  x1="0"
                  y1="0"
                  x2="0"
                  y2={40}
                />
              </Svg>
            </View>
          </View>

          <View style={styles.destinationContainer}>
            <Text style={styles.destinationTitle}>Pod Karlovem</Text>
            <Text style={styles.destinationDate}>Oct 02, 16:00</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.destinationButtonContainer}>
          <View style={styles.originDestinationIconContainer}>
            <View style={styles.originDestinationIcon}>
              <Icon name={'chevron-down'} color={'#FFF'} size={12} />
            </View>
          </View>

          <View style={styles.destinationContainer}>
            <Text style={styles.destinationTitle}>Bernard Pub</Text>
            <Text style={styles.destinationDate}>Oct 02, 16:00</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.callButtonContainer}>
        <TouchableOpacity style={styles.callButton} onPress={props?.showTop}>
          <View style={styles.callButtonIcon}>
            <Icon name={'phone'} size={26} color={'#E65100FF'} />
          </View>

          <Text style={styles.callButtonTitle}>CALL DRIVER</Text>
        </TouchableOpacity>
      </View>
    </View>
  </View>
);

export default BusCard;
