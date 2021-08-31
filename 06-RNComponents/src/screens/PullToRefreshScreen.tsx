import React, {useState} from 'react';
import {PickerIOS, RefreshControl, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {HeaderTitle} from '../components/HeaderTitle';
import {style} from '../theme/appTheme';

export const PullToRefreshScreen = () => {
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
          progressBackgroundColor="#5856D6"
          colors={['white', 'red', 'orange']}
          //   IOS
          style={{backgroundColor: '#5856D6'}}
          tintColor="white"
        />
      }>
      <View style={style.marginGlobal}>
        <HeaderTitle title="Pull to Refresh" />
        {data && <HeaderTitle title={data} />}
      </View>
    </ScrollView>
  );
};
