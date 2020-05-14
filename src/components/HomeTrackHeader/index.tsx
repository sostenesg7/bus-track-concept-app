import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';

const HomeTrackHeader = (props) => (
  <View style={styles.container}>
    <TouchableOpacity style={styles.backButton} onPress={props.showTop}>
      <Icon name={'chevron-left'} size={32} color={'#616161FF'} />
    </TouchableOpacity>
    <Text style={styles.title}>Track your bus</Text>
  </View>
);

export default HomeTrackHeader;
