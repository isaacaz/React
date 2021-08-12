import React from 'react';
import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  ScrollView,
  Text,
  View,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {MoviePoster} from '../components/MoviePoster';
import {useMovies} from '../hooks/useMovies';
import {HorizontalSlider} from '../components/HorizontalSlider';

const {width: windowsWidth} = Dimensions.get('window');

export const HomeScreen = () => {
  const {nowPlaying, popular, topRated, upcoming, isLoading} = useMovies();

  const {top} = useSafeAreaInsets();

  if (isLoading) {
    return (
      <ActivityIndicator
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        color="red"
        size={150}
      />
    );
  }

  return (
    <ScrollView>
      <View style={{marginTop: top + 20}}>
        <View
          style={{
            height: 440,
          }}>
          <Carousel
            data={nowPlaying}
            renderItem={({item}: any) => <MoviePoster movie={item} />}
            sliderWidth={windowsWidth}
            itemWidth={300}
            inactiveSlideOpacity={0.9}
          />
        </View>
        <HorizontalSlider title="Popular" movies={popular} />
        <HorizontalSlider title="Top Rated" movies={topRated} />
        <HorizontalSlider title="Upcoming" movies={upcoming} />
      </View>
    </ScrollView>
  );
};
