import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  Image,
  FlatList,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';
const {width} = Dimensions.get('window');
import {Svg, Line} from 'react-native-svg';

const OriginDestination = (props) => (
  <View style={styles.container}>
    <View style={styles.fromToContainer}>
      <View style={styles.fromToSubContainer}>
        <TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
            }}>
            <View
              style={{
                width: 40,
                alignItems: 'center',
              }}>
              <View
                style={{
                  height: 14,
                  width: 14,
                  borderWidth: 3,
                  borderRadius: 20,
                  borderColor: '#00C853FF',
                }}
              />

              <Svg
                height={30}
                width={1}
                style={{
                  alignSelf: 'center',
                  marginVertical: 5,
                }}>
                <Line
                  stroke="#616161FF"
                  strokeDasharray="4, 4"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2={30}
                />
              </Svg>
            </View>

            <View
              style={{
                flex: 1,
              }}>
              <Text
                style={{
                  fontFamily: 'Montserrat-Medium',
                  fontSize: 12,
                  color: '#616161FF', //
                }}>
                From
              </Text>

              <Text
                style={{
                  fontFamily: 'Montserrat-Medium',
                  fontSize: 15,
                  marginTop: 4,
                  color: '#212121FF',
                }}>
                Your location
              </Text>

              <View
                style={{
                  borderBottomColor: '#F0F0F0FF',
                  borderBottomWidth: 1,
                  marginVertical: 6,
                }}
              />
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={{}}>
          <View
            style={{
              flexDirection: 'row',
            }}>
            <View
              style={{
                width: 40,
                alignItems: 'center',
              }}>
              {/* <Icon name={'circle-outline'} size={16} color={'#0091EAFF'} /> */}
              <View
                style={{
                  height: 14,
                  width: 14,
                  borderWidth: 3,
                  borderRadius: 20,
                  borderColor: '#0091EAFF',
                }}
              />
            </View>

            <View
              style={{
                flex: 1,
              }}>
              <Text
                style={{
                  fontFamily: 'Montserrat-Medium',
                  fontSize: 12,
                  color: '#616161FF',
                }}>
                To
              </Text>

              <Text
                style={{
                  fontFamily: 'Montserrat-Medium',
                  fontSize: 15,
                  marginTop: 4,
                  color: '#212121FF',
                }}>
                Prague,Czech Republic
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={{
          width: 40,
          height: 40,
          marginHorizontal: 16,
          backgroundColor: '#F0F0F0FF',
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
        }}>
        <Icon name={'swap-vertical'} size={22} color={'#212121FF'} />
      </TouchableOpacity>
    </View>

    <View
      style={{
        marginTop: 12,
        flexDirection: 'row',
      }}>
      <View
        style={{
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
          flex: 1,
          alignContent: 'center',
          alignItems: 'center',
          elevation: 4,
        }}>
        <View
          style={{
            alignContent: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            width: 40,
          }}>
          <Icon name={'calendar'} color={'#E65100FF'} size={22} />
        </View>

        <Text
          style={{
            fontFamily: 'Montserrat-Medium',
            fontSize: 15,
            //
            color: '#616161FF',
          }}>
          Depart at:
          <Text
            style={{
              color: '#212121FF',
            }}>
            {' Now'}
          </Text>
        </Text>
      </View>

      <TouchableOpacity
        style={{
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
          width: 60,
          marginLeft: 20,
          justifyContent: 'center',
          elevation: 4,
        }}
        onPress={props.showBottom}>
        <Text
          style={{
            fontFamily: 'Montserrat-Bold',
            fontSize: 18,
            color: '#E65100FF',
          }}>
          GO
        </Text>
      </TouchableOpacity>
    </View>
  </View>
);

export default OriginDestination;
