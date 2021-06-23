import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, StatusBar } from 'react-native';
import { TopNavigatorParmsList } from '../../types';
import { StackNavigationProp } from '@react-navigation/stack'
import { SafeAreaView } from 'react-native-safe-area-context';
import { LabelHeader } from '../../components/header'
import styles from './styles';
import { LoadingComponent } from '../../components/loading';
import { SongsListComponent } from '../../components/songsList'
import AppStyles from '../../config/styles';
export interface HomeProps {
  navigation: StackNavigationProp<TopNavigatorParmsList, 'Home'>
};

const Home: React.FC<HomeProps> = (props: any) => {

  const [isLoading, setIsLoading] = useState(true)
  const [songList, setSongList] = useState()
  const [isFetching, setIsFetching] = useState(false);

  //used to get the data from api with refreshing flag also
  useEffect(() => {
    getSongList();
  }, [isFetching])

  //Function for get songs list

  const getSongList = () => {
    return fetch('https://itunes.apple.com/search?term=Michael+jackson')
      .then((response) => {
        if (response.ok) {
          response.json().then(data => {
            setIsFetching(false); //for refresh loader updates
            setIsLoading(false);  //for landing screen loader updates
            setSongList((data.results));  //set data in state
          })
        }
      })
      .catch((error) => {
        //here we can  right the component that what we need to show if error occurs
      });
  };
  const songsList = (item: any) => {
    return (
      <SongsListComponent item={item} onPress={() => { props.navigation.navigate('SongsDetails', { item: item }) }} />
    )
  }

  return (
    <>
      <SafeAreaView style={styles.statusBarColor}>
        <StatusBar
          backgroundColor={AppStyles.colors.COLOR_PRIMARY}
          barStyle="light-content"
        />
        <LabelHeader headerLabel="SONGS"  {...props} />
        <View style={styles.contentContainer}>
          {
            isLoading ?
              <LoadingComponent />
              :
              <FlatList
                keyboardShouldPersistTaps={'always'}
                keyExtractor={(item, index) => index.toString()}
                data={songList && songList}
                renderItem={(item: any) => songsList(item.item)
                }
                refreshing={isFetching}
                onRefresh={() => setIsFetching(true)}
              />
          }
        </View>
      </SafeAreaView>
    </>
  );
};
export default Home;