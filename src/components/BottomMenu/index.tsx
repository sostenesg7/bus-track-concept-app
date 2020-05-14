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

const BottomMenu = (props) => (
  <LinearGradient
    colors={['#ffffff00', '#ffffffde', '#ffffffff']}
    style={[styles.container, {width}]}>
    {[
      {icon: 'compass', active: true, onPress: props.showTop},
      {icon: 'calendar', active: false, onPress: props.showTop},
      {icon: 'account-plus', active: false, onPress: props.showTop},
      {icon: 'filter-variant', active: false, onPress: props.showTop},
    ].map(({active, icon, onPress}, index) => (
      <TouchableOpacity onPress={onPress} key={`${index}`}>
        <Icon
          name={icon}
          size={26}
          color={active ? '#0091EAFF' : '#9A9A9AFF'}
        />
      </TouchableOpacity>
    ))}
    <View style={styles.profileContainer}>
      <Image
        source={{
          uri:
            'https://www.wamc.org/sites/wamc/files/styles/medium/public/201809/katrina-lake-stitch-fix-e1512425110794.jpg',
        }}
        style={styles.profileImage}
        resizeMode={'contain'}
      />
    </View>
  </LinearGradient>
);

export default BottomMenu;
