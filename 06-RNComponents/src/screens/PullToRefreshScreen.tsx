import React, {useContext, useState} from 'react';
import {PickerIOS, RefreshControl, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {ThemeContext} from '../../context/themeContext/ThemeContext';
import {HeaderTitle} from '../components/HeaderTitle';
import {style} from '../theme/appTheme';

export const PullToRefreshScreen = () => {
  const {
    theme: {colors, dividerColor, dark},
  } = useContext(ThemeContext);

  const [refreshing, setrefreshing] = useState(false);

  const [data, setData] = useState<string>();

  const onRefresh = () => {
    setrefreshing(true);
    setTimeout(() => {
      console.log('termino');
      setrefreshing(false);
      setData('Hola Mundo');
    }, 1500);
  };

  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          progressViewOffset={10}
          progressBackgroundColor={dividerColor}
          colors={[colors.text]}
          //   IOS
          //style={{backgroundColor: '#5856D6'}}
          tintColor={dark ? 'white' : 'black'}
        />
      }>
      <View style={style.marginGlobal}>
        <HeaderTitle title="Pull to Refresh" />
        {data && <HeaderTitle title={data} />}
      </View>
    </ScrollView>
  );
};
