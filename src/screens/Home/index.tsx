/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useState, useEffect, useRef} from 'react';
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
import Map, {Polyline, Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Svg, Line} from 'react-native-svg';
import * as Animatable from 'react-native-animatable';
import {decode} from '@mapbox/polyline';
import LinearGradient from 'react-native-linear-gradient';
import {initialRegion} from '../../constants';
import BottomMenu from '../../components/BottomMenu';
import HomeTrackHeader from '../../components/HomeTrackHeader';
import OriginDestination from '../../components/OriginDestination';
import BusCard from '../../components/BusCard';
import styles from './styles';
import {decodePolyline} from '../../utils/Utils';

const AnimatableList = Animatable.createAnimatableComponent(FlatList);

const {width} = Dimensions.get('window');

const HomeTopGradient = () => (
  <LinearGradient
    colors={['#ffffffb1', '#ffffff00']}
    style={{
      height: 80,
      position: 'absolute',
      top: 0,
      width,
    }}
  />
);

const App = () => {
  const [] = useState(-500);
  const bottomRef = useRef(),
    trackRef = useRef(),
    topRef = useRef(),
    bottomCardRef = useRef(),
    mapRef = useRef(),
    bottomMenuRef = useRef();

  const polyline =
    '`fmq@dqxzEnB?vAA?S?iGAqF?_AMmACc@?[@i@EqDEUIQk@_AaAyAsDqGIUEQDEJQHKd@u@f@sAj@uBPaB\\iCRu@Vm@Zk@~AiC|@yAv@}Ad@{@dCsD`@q@vBgE\\g@j@iAh@y@r@y@v@eA`A_B^y@P_@Pq@fGwCtBgAzBsAjBeAvBmAt@Yx@i@v@c@x@kItAkMH}DLgBHiAHe@NwAJ}@J]T]BCDG@ICIGGEAMiAAeABq@Jq@fAeFVeAFkAAqA?UMk@Ca@@mAAQEqBBk@Hk@Rm@Zo@xBgDpAwBrBkCj@u@l@m@fByAbAc@fCwAj@SvBuA@QGWU}@g@wAUw@JGl@Ur@YFCLCaBiFIg@CSm@}JAu@[CGCuBq@sGgBm@OLo@h@wCHi@A@G?]?m@IaBe@@MLeA@SB?F@nA`@';

  const basePolyline = decodePolyline(polyline);

  const [polylineCoords] = useState(basePolyline);
  const [showPopyline, setShowPolyline] = useState(false);

  const baseCoords = [
    [-8.264809, -36.011865],
    [-8.277788, -35.966228],
    [-8.305239, -35.973178],
    [-8.272181, -35.965424],
    [-8.286237, -35.962506],
    [-8.301523, -35.960486],
    [-8.285321, -35.987025],
    [-8.276143, -35.987298],
    [-8.288763, -35.966634],
    [-8.277628, -35.956881],
  ].map(([latitude, longitude]) => ({
    latitude,
    longitude,
  }));

  const [coordinates, setCoordinates] = useState(baseCoords);

  useEffect(() => {
    setTimeout(() => {
      if (!topRef.current || !bottomRef.current || !bottomMenuRef.current) {
        return;
      }

      topRef.current.setNativeProps({
        style: {
          top: 30,
        },
      });

      topRef.current.animate('bounceInUp', 1000).then(() => {});

      bottomMenuRef.current.animate('bounceInUp', 1000).then(() => {});
    }, 1000);
  }, [bottomRef, topRef, bottomMenuRef]);

  const showTop = () => {
    if (!bottomRef.current || !topRef.current || !trackRef.current) {
      return;
    }

    const coords = [
      {
        latitude: -8.264809,
        longitude: -36.011865,
      },
      {
        latitude: -8.277788,
        longitude: -35.966228,
      },
    ];

    setCoordinates(baseCoords);
    setShowPolyline(false);

    mapRef.current.fitToCoordinates(coords, {
      edgePadding: {
        bottom: 0,
        left: 0,
        top: 400,
        right: 0,
      },
    });

    bottomRef.current.animate('bounceOutDown', 1000).then(() => {});

    topRef.current.animate('bounceInDown', 1000).then(() => {});

    trackRef.current.animate('bounceOutUp', 1000).then(() => {});
  };

  const showBottom = () => {
    if (!bottomRef.current || !topRef.current || !mapRef.current) {
      return;
    }

    const coords = [
      {
        latitude: -8.264809,
        longitude: -36.011865,
      },
      {
        latitude: -8.277788,
        longitude: -35.966228,
      },
    ];

    setCoordinates(coords);
    setShowPolyline(true);

    bottomRef.current.setNativeProps({
      style: {
        bottom: 90,
      },
    });

    trackRef.current.setNativeProps({
      style: {
        top: 20,
      },
    });

    /* setPolylineCoords(decode(polyline)
      .map(([latitude, longitude]) => ({ latitude, longitude }))); */

    mapRef.current.fitToCoordinates(coords, {
      edgePadding: {
        bottom: 400,
        left: 0,
        top: 0,
        right: 0,
      },
    });

    bottomRef.current.animate('bounceInUp', 1000).then(() => {});

    topRef.current.animate('bounceOutUp', 1000).then(() => {});

    trackRef.current.animate('bounceInDown', 1000).then(() => {});
  };

  const onMapReady = () => {
    if (!mapRef.current) {
      return;
    }
    mapRef.current.fitToCoordinates(coordinates, {
      edgePadding: {
        bottom: 0,
        left: 0,
        top: 400,
        right: 0,
      },
    });
  };

  const onMarkerPress = () => {
    bottomCardRef.current.setNativeProps({
      style: {
        bottom: 90,
      },
    });

    bottomCardRef.current.animate('bounceInUp', 1000).then(() => {});

    bottomRef.current.animate('bounceOutDown', 1000).then(() => {});

    topRef.current.animate('bounceOutUp', 1000).then(() => {});
  };

  return (
    <>
      {/* <StatusBar translucent backgroundColor={'transparent'} barStyle={'dark-content'} /> */}

      <Map
        ref={(r) => (mapRef.current = r)}
        style={styles.mapConainer}
        maxZoomLevel={16}
        onMapReady={onMapReady}
        initialRegion={initialRegion}
        provider={PROVIDER_GOOGLE}>
        {coordinates.map((c, index) => (
          <Marker key={index} coordinate={c} onPress={onMarkerPress}>
            <View style={styles.mapMarker}>
              <Icon name={'bus'} color={'#FFF'} size={16} style={{}} />
            </View>
          </Marker>
        ))}

        {showPopyline && (
          <Polyline
            coordinates={polylineCoords}
            strokeColor={'#4CAF50FF'}
            strokeWidth={2}
          />
        )}
      </Map>

      <HomeTopGradient />

      <SafeAreaView style={styles.homeContainer} pointerEvents={'box-none'}>
        <Animatable.View
          ref={(r) => (trackRef.current = r)}
          style={styles.homeTrackHeader}>
          <HomeTrackHeader showTop={showTop} />
        </Animatable.View>

        <Animatable.View
          ref={(r) => (topRef.current = r)}
          style={styles.originDestination}>
          <OriginDestination showBottom={showBottom} />
        </Animatable.View>

        <Animatable.View
          ref={(r) => (bottomRef.current = r)}
          useNativeDriver={true}
          style={styles.busCardContainer}>
          <BusCard showTop={showTop} />
        </Animatable.View>

        <AnimatableList
          ref={(r) => (bottomCardRef.current = r)}
          useNativeDriver={true}
          showsHorizontalScrollIndicator={false}
          pagingEnabled={true}
          scrollEventThrottle={10}
          style={styles.listContainer}
          horizontal={true}
          onMomentumScrollEnd={({
            nativeEvent: {contentOffset, layoutMeasurement},
          }) => {
            const {x} = contentOffset;
            const {width} = layoutMeasurement;
            const index = Math.round(x / width);

            mapRef.current.fitToCoordinates([coordinates[index]], {});
          }}
          scrollEnabled={true}
          nestedScrollEnabled={true}
          data={new Array(10).fill(null)}
          renderItem={({index}) => {
            return (
              <View
                key={`${index}`}
                style={{
                  width,
                  paddingHorizontal: 20,
                }}>
                <BusCard showTop={showTop} />
              </View>
            );
          }}
          keyExtractor={(item, index) => `${index}`}
        />

        <Animatable.View
          ref={(r) => (bottomMenuRef.current = r)}
          style={styles.bottomMenu}>
          <BottomMenu showTop={showTop} />
        </Animatable.View>
      </SafeAreaView>
    </>
  );
};

export default App;
